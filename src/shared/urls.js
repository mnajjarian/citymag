
const buildDuration = event => {
  const minutes = Math.floor((+new Date(event.start_time) - +new Date(event.end_time)) / 60 / 1000)
  return `${Math.floor(minutes / 60)}:${`0${minutes % 60}`.slice(-2)}`
}

const buildTime = (t) => t.split(/[^0-9A-z]/).join('')
const buildUrl = (base, query) => Object.keys(query).reduce(
  (acc, curr, index) => (
    `${acc}${index === 0 ? '?' : '&'}${curr}=${encodeURIComponent(query[curr])}`
  ),
  base
)

export const googleCalendarUrl = event => buildUrl('https://calendar.google.com/calendar/event', {
  action: 'TEMPLATE',
  dates: `${buildTime(event.start_time)}/${buildTime(event.end_time)}`,
  text: event.name.en ? event.name.en : event.name.fi,
  details: event.short_description.en ? event.short_description.en : event.short_description.fi,
  location: event.location.name.en ? event.location.name.en : event.location.name.fi
})

export const outlookCalendarUrl = event => buildUrl('https://outlook.live.com/owa', {
  rru: 'addevent',
  startdt: buildTime(event.start_time),
  enddt: buildTime(event.end_time),
  subject: event.name.en ? event.name.en : event.name.fi,
  location: event.location.name.en ? event.location.name.en : event.location.name.fi,
  body: event.short_description.en ? event.short_description.en : event.short_description.fi,
  allday: false,
  uid: new Date().getTime().toString(),
  path: '/calendar/view/Month'
})

export const yahooCalendarUrl = event => buildUrl('https://calendar.yahoo.com', {
  v: 60,
  view: 'd',
  type: 20,
  title: event.name.en ? event.name.en : event.name.fi,
  st: buildTime(event.start_time),
  dur: buildDuration(event),
  desc: event.short_description.en ? event.short_description.en : event.short_description.fi,
  in_loc: event.location.name.en ? event.location.name.en : event.location.name.fi
})

export const ICSCalendarUrl = event => {
  const components = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `URL:${document.URL}`,
    `DTSTART:${buildTime(event.start_time)}`,
    `DTEND:${buildTime(event.end_time)}`,
    `SUMMARY:${event.name.en ? event.name.en : event.name.fi}`,
    `DESCRIPTION:${event.short_description.en ? event.short_description.en : event.short_description.fi}`,
    `LOCATION:${event.location.name.en ? event.location.name.en : event.location.name.fi}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ]
  return encodeURI(`data:text/calendar;charset=utf8,${components.join('\n')}`)
}