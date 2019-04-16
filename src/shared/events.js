export const EVENTS = {
  meta: {
    count: 70,
    next: 'http://api.hel.fi/linkedevents/v1/event/?end=2019-01-05&format=json&include=location&page=2&page_size=50&start=today',
    previous: null,
  },
  data: [
    {
      id: 'lippupiste:serie-2138424',
      location: {
        id: 'tprek:9302',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:kallio',
            municipality: 'Helsinki',
            name: {
              fi: 'Kallio',
              sv: 'Berghäll',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:linjat',
            municipality: 'Helsinki',
            name: {
              fi: 'Linjat',
              sv: 'Linjerna',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:kallio',
            municipality: 'Helsinki',
            name: {
              fi: 'Kallio',
              sv: 'Berghäll',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2018-10-25T05:09:30.683946Z',
        custom_data: null,
        email: null,
        contact_type: null,
        address_region: null,
        postal_code: '00530',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 1574,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.942722,
            60.181675,
          ],
        },
        street_address: {
          fi: 'Eläintarhantie 5',
          sv: 'Djurgårdsvägen 5',
          en: 'Eläintarhantie 5',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.hkt.fi/',
          sv: 'http://www.hkt.fi/',
          en: 'http://www.hkt.fi/',
        },
        telephone: {
          fi: '09 394 01',
        },
        description: null,
        name: {
          fi: 'Helsingin Kaupunginteatteri',
          sv: 'Helsingfors Stadsteater',
          en: 'Helsinki City Theatre',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:9302/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p1808/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p11693/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p6422/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2625/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: null,
          info_url: {
            fi: 'https://www.lippu.fi/tickets.html?affiliate=adv&fun=evdetail&doc=evdetailb&key=2138424$11306245',
          },
          description: {
            fi: 'Tarkista hinta lippupalvelusta',
          },
        },
      ],
      data_source: 'lippupiste',
      publisher: 'ytj:1789232-4',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646812/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646829/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646821/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646830/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646813/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646814/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646815/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646822/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646831/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646823/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646832/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646824/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646833/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646816/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646834/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646825/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646835/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646836/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646826/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646837/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646838/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646839/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646827/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646840/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646817/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646841/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646818/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646819/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646828/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646842/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10646820/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196730/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196738/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196735/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196739/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196731/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196732/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196740/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196741/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196736/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196742/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196743/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196733/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196744/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196737/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196745/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196734/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11196746/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429289/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429286/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429287/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272752/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272768/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272761/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272769/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272753/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272754/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11306244/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272770/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11306241/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272755/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272771/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272762/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272756/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272757/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272758/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429288/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272772/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272773/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272763/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11511228/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11306242/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272774/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272764/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11511229/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11511230/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272759/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272775/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272765/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11306243/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272766/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272776/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11511231/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11511232/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272760/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272777/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11272767/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11306245/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11650504/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11650503/?format=json',
        },
      ],
      images: [
        {
          id: 47462,
          license: 'event_only',
          created_time: '2018-09-28T16:16:31.025733Z',
          last_modified_time: '2018-09-28T16:16:31.025753Z',
          name: '',
          url: 'https://www.lippu.fi/obj/media/FI-eventim/teaser/222x222/2018/Kinkyboots_222x222.jpg',
          cropping: '',
          photographer_name: null,
          data_source: 'lippupiste',
          publisher: 'ytj:1789232-4',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/47462/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: '2018-09-28T16:16:48.094987Z',
      last_modified_time: '2019-04-12T11:16:16.681465Z',
      date_published: null,
      start_time: '2018-12-31T17:00:00Z',
      end_time: '2019-05-11',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: {
        fi: 'Helsingin Kaupunginteatteri',
      },
      short_description: {
        fi: 'Sensaatiomainen, parhaana musikaalina Tony-, Grammy- ja Olivier-palkittu, vuosikymmenen suurin, seksikkäin ja sydämellisin show saapuu vihdoin syksyllä 2018 Hel',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Helsingin Kaupunginteatteri, Suuri näyttämö',
      },
      info_url: {
        fi: 'https://www.lippu.fi/tickets.html?affiliate=adv&doc=erdetaila&fun=erdetail&erid=2138424',
      },
      description: {
        fi: '<p>Sensaatiomainen, parhaana musikaalina Tony-, Grammy- ja Olivier-palkittu, vuosikymmenen suurin, seksikkäin ja sydämellisin show saapuu vihdoin syksyllä 2018 Helsinkiin. Pop-ikoni Cyndi Lauperin säveltämä musikaali <strong>Kinky Boots</strong> juhlistaa erilaisuutta, ystävyyttä ja ennakkoluulojen voittamista.</p><p><strong>Kinky Boots</strong> vie sinut vuoristoradan vauhdilla tehdashallien hämärästä muotimaailman huipulle. Isänsä konkurssin partaalla olevan kenkätehtaan perinyt Charlie on epätoivoinen kaatuvan yrityksensä kanssa. Apuun saapuu kuin luonnonvoima, glitterin ja höyhenien keskeltä, hurmaava viihdetaiteilija Lola seurueineen villin ideansa kanssa. Tämä pari, jolla ei pitäisi olla mitään yhteistä, yltää lopulta uskomattomiin saavutuksiin, joista muut vain uneksivat.</p><p><strong>Kinky Boots</strong> - Kaupunginteatterin uusi musikaali, jossa on potkua suurella sydämellä! Avaa sydämesi, laita korkokengät jalkaan ja tule kokemaan fantastinen show joka on rakkauden asialla!</p><p>Tekijänoikeuksia valvoo MTI Europe.</p>',
      },
      name: {
        fi: 'Kinky Boots',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:serie-2138424/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'lippupiste:serie-2099955',
      location: {
        id: 'tprek:9302',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:kallio',
            municipality: 'Helsinki',
            name: {
              fi: 'Kallio',
              sv: 'Berghäll',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:linjat',
            municipality: 'Helsinki',
            name: {
              fi: 'Linjat',
              sv: 'Linjerna',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:kallio',
            municipality: 'Helsinki',
            name: {
              fi: 'Kallio',
              sv: 'Berghäll',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2018-10-25T05:09:30.683946Z',
        custom_data: null,
        email: null,
        contact_type: null,
        address_region: null,
        postal_code: '00530',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 1574,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.942722,
            60.181675,
          ],
        },
        street_address: {
          fi: 'Eläintarhantie 5',
          sv: 'Djurgårdsvägen 5',
          en: 'Eläintarhantie 5',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.hkt.fi/',
          sv: 'http://www.hkt.fi/',
          en: 'http://www.hkt.fi/',
        },
        telephone: {
          fi: '09 394 01',
        },
        description: null,
        name: {
          fi: 'Helsingin Kaupunginteatteri',
          sv: 'Helsingfors Stadsteater',
          en: 'Helsinki City Theatre',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:9302/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p16164/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2625/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: null,
          info_url: {
            fi: 'https://www.lippu.fi/tickets.html?affiliate=adv&fun=evdetail&doc=evdetailb&key=2099955$11444229',
          },
          description: {
            fi: 'Tarkista hinta lippupalvelusta',
          },
        },
      ],
      data_source: 'lippupiste',
      publisher: 'ytj:1789232-4',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10623030/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800432/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800433/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800434/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800435/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800436/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800431/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800430/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800437/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800438/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800439/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800440/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800441/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800442/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800443/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800444/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800445/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800446/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800447/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800448/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10800449/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231572/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231573/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231577/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231574/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231575/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231576/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444221/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444222/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444230/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444231/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444223/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444224/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444225/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444226/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444227/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444232/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444233/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444228/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11444229/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11601708/?format=json',
        },
      ],
      images: [
        {
          id: 47458,
          license: 'event_only',
          created_time: '2018-09-28T16:16:30.213239Z',
          last_modified_time: '2018-09-28T16:16:30.213260Z',
          name: '',
          url: 'https://www.lippu.fi/obj/media/FI-eventim/teaser/222x222/2018/morkoooppera_222.jpg',
          cropping: '',
          photographer_name: null,
          data_source: 'lippupiste',
          publisher: 'ytj:1789232-4',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/47458/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: '2018-09-28T16:16:46.767114Z',
      last_modified_time: '2019-04-12T11:16:16.250574Z',
      date_published: null,
      start_time: '2018-09-29T10:00:00Z',
      end_time: '2019-05-11',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: {
        fi: 'Helsingin Kaupunginteatteri',
      },
      short_description: {
        fi: 'Mörkö se lähti piiriin, tinttan tanttan tallallei.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Helsingin Kaupunginteatteri, Pieni näyttämö',
      },
      info_url: {
        fi: 'https://www.lippu.fi/tickets.html?affiliate=adv&doc=erdetaila&fun=erdetail&erid=2099955',
      },
      description: {
        fi: '<p> Mörkö se lähti piiriin,<br>tinttan tanttan tallallei.<br>Mörkö se lähti piiriin,<br>Mörkö se lähti piiriin.<br>Mitähän se Mörkö tahtoo,<br>tinttan tanttan tallallei?<br>Mitähän se Mörkö tahtoo,<br>mitähän se Mörkö tahtoo?<br>Mörkö se tahtoo<br>Helsingin Kaupunginteatteriin.</p><p>Kaikille 80-luvulla eläneille tuttuakin tutumpi klassikko, hittien hitti, Mörköooppera, valtaa Kaupunginteatterin pienen näyttämön.<br>Marjatta Pokelan Mörköoopperan laulut muodostavat huikean ja hauskan seikkailun, jossa Mörkö tulee Mökkyrän satumaasta, lähtee tutustumaan Helsinkiin, ja palaa lopulta takaisin Mökkyrään.</p><p>Mörkö vie meidät matkalle, jossa lapsen silmin pohditaan ja katsotaan ympäröivää maailmaa ja jossa ymmärretään puhtaan luonnon ja ihmiselämän monimuotoisuuden merkitys. Tämän kaiken näemme hauskojen hahmojen, vauhdikkaan tanssin ja mukaansatempaavan musiikin ja laulun siivittäminä.</p><p>Musiikin tähän koko perheen esitykseen sovittaa ja toteuttaa multi-instrumentalisti Lauri Schreck. Koreografiat laatii Jyrki Karttunen.</p>',
      },
      name: {
        fi: 'Mörköooppera',
        sv: 'Mörköooppera',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:serie-2099955/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'lippupiste:serie-2082830',
      location: {
        id: 'tprek:9302',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:kallio',
            municipality: 'Helsinki',
            name: {
              fi: 'Kallio',
              sv: 'Berghäll',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:linjat',
            municipality: 'Helsinki',
            name: {
              fi: 'Linjat',
              sv: 'Linjerna',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:kallio',
            municipality: 'Helsinki',
            name: {
              fi: 'Kallio',
              sv: 'Berghäll',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2018-10-25T05:09:30.683946Z',
        custom_data: null,
        email: null,
        contact_type: null,
        address_region: null,
        postal_code: '00530',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 1574,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.942722,
            60.181675,
          ],
        },
        street_address: {
          fi: 'Eläintarhantie 5',
          sv: 'Djurgårdsvägen 5',
          en: 'Eläintarhantie 5',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.hkt.fi/',
          sv: 'http://www.hkt.fi/',
          en: 'http://www.hkt.fi/',
        },
        telephone: {
          fi: '09 394 01',
        },
        description: null,
        name: {
          fi: 'Helsingin Kaupunginteatteri',
          sv: 'Helsingfors Stadsteater',
          en: 'Helsinki City Theatre',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:9302/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: null,
          info_url: {
            fi: 'https://www.lippu.fi/tickets.html?affiliate=adv&fun=evdetail&doc=evdetailb&key=2082830$11283555',
          },
          description: {
            fi: 'Tarkista hinta lippupalvelusta',
          },
        },
      ],
      data_source: 'lippupiste',
      publisher: 'ytj:1789232-4',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10829360/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10829361/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10829362/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11283551/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11283552/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11283553/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11283554/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11283555/?format=json',
        },
      ],
      images: [
        {
          id: 47461,
          license: 'event_only',
          created_time: '2018-09-28T16:16:30.749000Z',
          last_modified_time: '2018-09-28T16:16:30.749021Z',
          name: '',
          url: 'https://www.lippu.fi/obj/media/FI-eventim/teaser/222x222/2017/hktalo222.jpg',
          cropping: '',
          photographer_name: null,
          data_source: 'lippupiste',
          publisher: 'ytj:1789232-4',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/47461/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: '2018-09-28T16:16:42.721097Z',
      last_modified_time: '2019-04-12T11:16:15.324649Z',
      date_published: null,
      start_time: '2018-10-03T13:30:00Z',
      end_time: '2019-05-08',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: {
        fi: 'Helsingin Kaupunginteatteri',
      },
      short_description: {
        fi: 'Keskiviikon kulissikierros Tervetuloa tutustumaan peruskorjattuun 50-vuotiaaseen teatteritaloon sekä kurkistamaan kulissien taakse.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Suuri näyttämö LÄMPIÖ',
      },
      info_url: {
        fi: 'https://www.lippu.fi/tickets.html?affiliate=adv&doc=erdetaila&fun=erdetail&erid=2082830',
      },
      description: {
        fi: '<p><strong>Keskiviikon kulissikierros</strong></p><p>Tervetuloa tutustumaan peruskorjattuun 50-vuotiaaseen teatteritaloon sekä kurkistamaan kulissien taakse. Kulissikierroksella pääsee tutustumaan teatterin kulissien taakse, näyttämölle, työpajoihin ja kaikkeen siihen, mitä katsomosta ei näe.</p><p>Kulissikierros kestää noin tunnin.</p><p>Kierrokselle lähdetään suuren näyttämön ovilta, Eläintarhantie 5.</p><p>Yhdelle kierrokselle mahtuu 25 henkilöä.</p><p>Huomioithan, että kulissien takaiset tilat eivät valitettavasti ole esteettömiä!</p><p>Mikäli haluat tuoda ryhmän kulissikierrokselle niin olethan yhteydessä yleisötyövastaava Mirja Neuvoseen: mirja.neuvonen@hkt.fi</p>',
      },
      name: {
        fi: 'Keskiviikon Kulissikierros',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:serie-2082830/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'lippupiste:serie-1646364',
      location: {
        id: 'tprek:9340',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:pasila',
            municipality: 'Helsinki',
            name: {
              fi: 'Pasila',
              sv: 'Böle',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:itä-pasila',
            municipality: 'Helsinki',
            name: {
              fi: 'Itä-Pasila',
              sv: 'Östra Böle',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:pasila',
            municipality: 'Helsinki',
            name: {
              fi: 'Pasila',
              sv: 'Böle',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2018-10-25T05:09:30.771083Z',
        custom_data: null,
        email: null,
        contact_type: null,
        address_region: null,
        postal_code: '00520',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 1021,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.940813,
            60.199215,
          ],
        },
        street_address: {
          fi: 'Ratamestarinkatu 5',
          sv: 'Banmästargatan 5',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.hkt.fi/studiopasila/',
          sv: 'http://www.hkt.fi/studiopasila/',
          en: 'http://www.hkt.fi/studiopasila/',
        },
        telephone: {
          fi: '09 394 01',
        },
        description: null,
        name: {
          fi: 'Teatteristudio Pasila',
          sv: 'Teaterstudio Pasila',
          en: 'Theatre Studio Pasila',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:9340/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p5/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p9244/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: null,
          info_url: {
            fi: 'https://www.lippu.fi/tickets.html?affiliate=adv&fun=evdetail&doc=evdetailb&key=1646364$11429487',
          },
          description: {
            fi: 'Tarkista hinta lippupalvelusta',
          },
        },
      ],
      data_source: 'lippupiste',
      publisher: 'ytj:1789232-4',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10623021/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10623022/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10799608/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10799600/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10799609/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10868512/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10799610/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10799603/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10799604/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10799605/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10799606/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10799607/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231805/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231806/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231807/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231808/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231809/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231810/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231811/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231812/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231813/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429488/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429481/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429482/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429483/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429489/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429484/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429485/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429490/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429486/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429491/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429492/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11429487/?format=json',
        },
      ],
      images: [
        {
          id: 47454,
          license: 'event_only',
          created_time: '2018-09-28T16:16:29.921428Z',
          last_modified_time: '2018-09-28T16:16:29.921473Z',
          name: '',
          url: 'https://www.lippu.fi/obj/media/FI-eventim/teaser/222x222/2018/clubactione-222x222.jpg',
          cropping: '',
          photographer_name: null,
          data_source: 'lippupiste',
          publisher: 'ytj:1789232-4',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/47454/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: '2018-09-28T16:16:42.372309Z',
      last_modified_time: '2019-04-12T11:16:15.260762Z',
      date_published: null,
      start_time: '2018-09-28T16:00:00Z',
      end_time: '2019-05-04',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: {
        fi: 'Helsingin Kaupunginteatteri',
      },
      short_description: {
        fi: 'Club Act!one Studio Pasila on tätä nykyä Suomen johtava stand up -komiikan estradi.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Studio Pasila',
      },
      info_url: {
        fi: 'https://www.lippu.fi/tickets.html?affiliate=adv&doc=erdetaila&fun=erdetail&erid=1646364',
      },
      description: {
        fi: '<p>Studio Pasila on tätä nykyä Suomen johtava stand up -komiikan estradi.</p><p>Kesto n. 2 t<br>Esitykset kielletty alle 18 v.</p><p>Lavalle nousevat maan eturivin stand up -koomikot. Näissä huikean hulvattomissa, yhden miehen tai naisen esityksissä aiheet vaihtuvat ja saavat uusia vivahteita yleisöltä. Stand up -komiikassa yleisö elää ja saa elää mukana. Stand up on irrottelua, vedätystä, itsensä alttiiksi panemista ja uuden esitystilanteen nopeaa oivaltamista.</p><p>Ensi-ilta oli 19.1.2002</p>',
        en: '<p>Club Act!one</p>',
      },
      name: {
        fi: 'Club Act!One',
        en: 'Club Act!One',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:serie-1646364/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'lippupiste:serie-967155',
      location: {
        id: 'tprek:9340',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:pasila',
            municipality: 'Helsinki',
            name: {
              fi: 'Pasila',
              sv: 'Böle',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:itä-pasila',
            municipality: 'Helsinki',
            name: {
              fi: 'Itä-Pasila',
              sv: 'Östra Böle',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:pasila',
            municipality: 'Helsinki',
            name: {
              fi: 'Pasila',
              sv: 'Böle',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2018-10-25T05:09:30.771083Z',
        custom_data: null,
        email: null,
        contact_type: null,
        address_region: null,
        postal_code: '00520',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 1021,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.940813,
            60.199215,
          ],
        },
        street_address: {
          fi: 'Ratamestarinkatu 5',
          sv: 'Banmästargatan 5',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.hkt.fi/studiopasila/',
          sv: 'http://www.hkt.fi/studiopasila/',
          en: 'http://www.hkt.fi/studiopasila/',
        },
        telephone: {
          fi: '09 394 01',
        },
        description: null,
        name: {
          fi: 'Teatteristudio Pasila',
          sv: 'Teaterstudio Pasila',
          en: 'Theatre Studio Pasila',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:9340/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13876/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2625/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: null,
          info_url: {
            fi: 'https://www.lippu.fi/tickets.html?affiliate=adv&fun=evdetail&doc=evdetailb&key=967155$11745255',
          },
          description: {
            fi: 'Tarkista hinta lippupalvelusta',
          },
        },
      ],
      data_source: 'lippupiste',
      publisher: 'ytj:1789232-4',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10780240/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10780241/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10780242/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10780243/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10780245/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10780244/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:10780246/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231641/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11231642/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11326155/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11282785/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11326156/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11326157/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11326158/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11326153/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11326159/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11326154/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11745246/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11745247/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11745248/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11745249/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11745250/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11745251/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11745252/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11745253/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11745254/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:11745255/?format=json',
        },
      ],
      images: [
        {
          id: 47460,
          license: 'event_only',
          created_time: '2018-09-28T16:16:30.509471Z',
          last_modified_time: '2018-09-28T16:16:30.509490Z',
          name: '',
          url: 'https://www.lippu.fi/obj/media/FI-eventim/teaser/222x222/2017/hkt_kiviataskussa_222x222.jpg',
          cropping: '',
          photographer_name: null,
          data_source: 'lippupiste',
          publisher: 'ytj:1789232-4',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/47460/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: '2018-09-28T16:16:42.081201Z',
      last_modified_time: '2019-04-12T11:16:15.193628Z',
      date_published: null,
      start_time: '2018-10-01T16:00:00Z',
      end_time: '2019-10-30',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: {
        fi: 'Helsingin Kaupunginteatteri',
      },
      short_description: {
        fi: 'Marie Jones KIVIÄ TASKUSSA Ohjaus Pentti Kotkaniemi Lavastus ja puvut Jyrki Seppä Rooleissa Martti Suosalo ja Mika Nuojua Charlie ja Jake kulkevat tässä komedia',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Studio Pasila',
      },
      info_url: {
        fi: 'https://www.lippu.fi/tickets.html?affiliate=adv&doc=erdetaila&fun=erdetail&erid=967155',
      },
      description: {
        fi: '<p>Marie Jones<br>KIVIÄ TASKUSSA</p><p>Ohjaus Pentti Kotkaniemi<br>Lavastus ja puvut Jyrki Seppä<br>Rooleissa Martti Suosalo ja Mika Nuojua</p><p>Charlie ja Jake kulkevat tässä komediassa läpi monen miehen elämän. Ihmiskohtaloihin ja kokemuksiin limittyy myös Irlannin historia. Tarina alkaa siitä, kun 35-vuotiaat luuserit menevät avustajiksi amerikkalaisen elokuvan kuvauksiin ja joutuvatkin tekemään aivan muuta kuin ennakkoon aavistavat.</p><p>Ensi-ilta Studio Pasilassa (Ratamestarinkatu 5) 24.10.2002.</p><p>Kesto noin 2 h 20 min.</p><p>Pyörätuolipaikkojen sekä mahdollisten avustajapaikkojen varaus suoraan Helsingin kaupunginteatterin lipunmyynnistä. p. 09- 394 022.</p>',
      },
      name: {
        fi: 'Kiviä Taskussa',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/lippupiste:serie-967155/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helmet:144875',
      location: {
        id: 'tprek:8254',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:vanhakaupunki',
            municipality: 'Helsinki',
            name: {
              fi: 'Vanhakaupunki',
              sv: 'Gammelstaden',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:arabianranta',
            municipality: 'Helsinki',
            name: {
              fi: 'Arabianranta',
              sv: 'Arabiastranden',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:toukola',
            municipality: 'Helsinki',
            name: {
              fi: 'Toukola',
              sv: 'Majstad',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-04-02T06:09:13.417215Z',
        custom_data: null,
        email: 'arabianrannan_kirjasto@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00560',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 125,
        image: 54221,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.976784,
            60.208977,
          ],
        },
        street_address: {
          fi: 'Hämeentie 135 A',
          sv: 'Tavastvägen 135 A',
          en: 'Hämeentie 135 A',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsinki',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.helmet.fi/arabianrannankirjasto',
          sv: 'http://www.helmet.fi/arabiastrandensbibliotek',
          en: 'http://www.helmet.fi/arabiastrandensbibliotek',
        },
        telephone: {
          fi: '09 310 85056',
        },
        description: null,
        name: {
          fi: 'Arabianrannan kirjasto',
          sv: 'Arabiastrandens bibliotek',
          en: 'Arabianranta Library',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:8254/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:11689/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:1/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:10689/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:10595/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4363/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [],
      data_source: 'helmet',
      publisher: 'ahjo:u4804001010',
      sub_events: [],
      images: [
        {
          id: 38584,
          license: 'cc_by',
          created_time: '2017-08-22T12:15:43.079244Z',
          last_modified_time: '2018-11-13T15:26:59.621367Z',
          name: '',
          url: 'https://www.helmet.fi/download/noname/{B063CCF5-C7C4-44FC-8E8B-7C1DD0CCDDF1}/57770',
          cropping: '',
          photographer_name: null,
          data_source: 'helmet',
          publisher: 'ahjo:u4804001010',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/38584/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4363/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
      ],
      created_time: null,
      last_modified_time: '2019-03-06T08:21:51.094333Z',
      date_published: '2017-08-22T11:10:00Z',
      start_time: '2018-01-18T22:00:00Z',
      end_time: '2019-05-30T21:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: null,
      short_description: {
        fi: 'Ota yhteyttä!',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: null,
      description: {
        fi: '<p>Satujoogaa Arabianrannan kirjastossa ryhmille erikseen sovittavana ajankohtana</p><p>Tuokio on 3-6-vuotiaille. Joogaamaan mahtuu 14 lasta.<br> Ilmoittautumiset ja tiedustelut puh. 09-31085056 <a href="mailto:katri.sajalahti@hel.fi">katri.sajalahti@hel.fi</a></p>',
      },
      name: {
        fi: 'Satujoogaa',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helmet:144875/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helmet:183979',
      location: {
        id: 'tprek:15376',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:espoo',
            municipality: null,
            name: {
              fi: 'Espoo',
              sv: 'Esbo',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-04-02T06:09:16.580916Z',
        custom_data: null,
        email: 'kirjasto.soukka@espoo.fi',
        contact_type: null,
        address_region: null,
        postal_code: '02360',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 1541,
        image: 54256,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.672998,
            60.13772,
          ],
        },
        street_address: {
          fi: 'Soukantie 4',
          sv: 'Sökövägen 4',
          en: 'Soukantie 4',
        },
        address_locality: {
          fi: 'Espoo',
          sv: 'Espoo',
          en: 'Espoo',
        },
        info_url: {
          fi: 'http://www.helmet.fi/SoukanKirjasto',
          sv: 'http://www.helmet.fi/sokobibliotek',
          en: 'http://www.helmet.fi/sokobibliotek',
        },
        telephone: {
          fi: '09 8165 7736',
        },
        description: null,
        name: {
          fi: 'Soukan kirjasto',
          sv: 'Sökö bibliotek',
          en: 'Soukka Library',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:15376/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p11406/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:10690/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:1/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:11727/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:10592/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [],
      data_source: 'helmet',
      publisher: 'ahjo:u4804001010',
      sub_events: [],
      images: [
        {
          id: 50325,
          license: 'cc_by',
          created_time: '2018-11-26T12:23:54.965256Z',
          last_modified_time: '2018-11-26T12:23:54.965276Z',
          name: '',
          url: 'https://www.helmet.fi/download/noname/{E8FFA8F7-83E1-4602-AAE8-218CFB65CF1A}/69445',
          cropping: '',
          photographer_name: null,
          data_source: 'helmet',
          publisher: 'ahjo:u4804001010',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/50325/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [],
      created_time: '2019-02-14T12:24:08.761725Z',
      last_modified_time: '2019-02-14T12:24:08.820970Z',
      date_published: '2019-02-14T11:02:34.107000Z',
      start_time: '2018-05-15T11:00:00Z',
      end_time: '2019-05-15T12:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: null,
      short_description: {
        fi: 'Soukan kirjaston lukupiiri',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Soukan palvelutalo, Soukankaari 7',
      },
      info_url: null,
      description: {
        fi: '<p>Kokoonnumme <strong>Soukan elä- ja asu -seniorikeskuksessa</strong> kerran kuussa keskiviikkona klo 14-15.</p><p> <strong>Seuraavat lukupiirikerrat:</strong> </p><p> <strong>16.1.2019 klo 14:00 – 15:00</strong> (huone 125)</p><p>- Puhumme kirjasta Joel Haahtela: Tähtikirkas, lumivalkoinen</p><p> <strong>13.2.2019 klo 14:00 – 15:00 </strong>(takkahuone)</p><p>- Puhumme kirjasta Eppu Nuotio: Myrkkykeiso</p><p> <strong>13.3.2019 klo 14:00 – 15:00 </strong>(takkahuone)</p><p>- Puhumme kirjasta Catharina Ingelman-Sundberg: Kakkua, kiitos!</p><p> <strong>10.4.2019 klo 14:00 – 15:00 </strong>(takkahuone)</p><p>- Puhumme kirjasta Hellevi Arjava: Minne pääsi kiltti tyttö</p><p> <strong>15.5.2019 klo 14:00 – 15:00 </strong>(huone 125)</p><p>- Puhumme kirjasta Pertti Lassila: Kesän kerran mentyä</p><p> <strong>*kesätauko*</strong> </p><p>Kirjat tuodaan seniorikeskukseen valmiiksi lainattuina ja niitä voi noutaa, sekä palauttaa aina seniorikeskuksen ollessa avoinna askarteluhuoneeseen.</p><p>Tervetuloa keskustelemaan kirjallisuudesta!</p>',
      },
      name: {
        fi: 'Soukan kirjaston lukupiiri',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helmet:183979/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helmet:3548',
      location: {
        id: 'tprek:8254',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:vanhakaupunki',
            municipality: 'Helsinki',
            name: {
              fi: 'Vanhakaupunki',
              sv: 'Gammelstaden',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:arabianranta',
            municipality: 'Helsinki',
            name: {
              fi: 'Arabianranta',
              sv: 'Arabiastranden',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:toukola',
            municipality: 'Helsinki',
            name: {
              fi: 'Toukola',
              sv: 'Majstad',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-04-02T06:09:13.417215Z',
        custom_data: null,
        email: 'arabianrannan_kirjasto@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00560',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 125,
        image: 54221,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.976784,
            60.208977,
          ],
        },
        street_address: {
          fi: 'Hämeentie 135 A',
          sv: 'Tavastvägen 135 A',
          en: 'Hämeentie 135 A',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsinki',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.helmet.fi/arabianrannankirjasto',
          sv: 'http://www.helmet.fi/arabiastrandensbibliotek',
          en: 'http://www.helmet.fi/arabiastrandensbibliotek',
        },
        telephone: {
          fi: '09 310 85056',
        },
        description: null,
        name: {
          fi: 'Arabianrannan kirjasto',
          sv: 'Arabiastrandens bibliotek',
          en: 'Arabianranta Library',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:8254/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:1/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:10689/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4363/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:10595/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:11688/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p11617/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helmet:10784/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [],
      data_source: 'helmet',
      publisher: 'ahjo:u4804001010',
      sub_events: [],
      images: [
        {
          id: 38514,
          license: 'cc_by',
          created_time: '2017-08-17T12:15:26.041431Z',
          last_modified_time: '2018-11-13T15:26:59.275254Z',
          name: '',
          url: 'https://www.helmet.fi/download/noname/{4EA2DCBE-959B-4EE5-8A4E-E2C19A3AEAF3}/57633',
          cropping: '',
          photographer_name: null,
          data_source: 'helmet',
          publisher: 'ahjo:u4804001010',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/38514/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4363/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p11617/?format=json',
        },
      ],
      created_time: null,
      last_modified_time: '2019-02-13T16:23:51.560333Z',
      date_published: '2018-08-15T06:00:00Z',
      start_time: '2018-08-02T21:00:00Z',
      end_time: '2019-05-22T21:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: null,
      short_description: {
        fi: 'Joka keskiviikko klo 9.30',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: null,
      description: {
        fi: '<p> Arabianrannan kirjastossa keskiviikkoisin klo 9.30. Jokainen osallistuja saa oman satupassin johon voi kerätä tarroja. </p><p> <strong> HUOM! Lomaviikolla 20.2.2019 ei ole Satutuntia! </strong> </p><p> <a href="http://www.helmet.fi/Preview/fi-FI/Kirjastot_ja_palvelut/Arabianrannan_kirjasto/Juttuja_kirjastosta/Satutunnilla_luetut(175734)">Täältä voit käydä katsomassa mitä aiemmilla Satuneilla on luettu</a> <a href="http://www.helmet.fi/Preview/fi-FI/Kirjastot_ja_palvelut/Arabianrannan_kirjasto/Juttuja_kirjastosta/Satutunnilla_luetut(175734)"> . </a> </p>',
      },
      name: {
        fi: 'Satutunti',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helmet:3548/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'espoo:148732',
      location: {
        id: 'tprek:28401',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:espoo',
            municipality: null,
            name: {
              fi: 'Espoo',
              sv: 'Esbo',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-01-08T07:09:44.751964Z',
        custom_data: null,
        email: 'haltia@metsa.fi',
        contact_type: null,
        address_region: null,
        postal_code: '02820',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 74,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.557024,
            60.29373,
          ],
        },
        street_address: {
          fi: 'Nuuksiontie 84',
          sv: 'Nouxvägen 84',
          en: 'Nuuksiontie 84',
        },
        address_locality: {
          fi: 'Espoo',
          sv: 'Esbo',
          en: 'Espoo',
        },
        info_url: {
          fi: 'http://www.haltia.com',
          sv: 'https://www.haltia.com/se/',
          en: 'https://www.haltia.com/en/',
        },
        telephone: {
          fi: '+358 40 163 6200',
        },
        description: {
          fi: 'Suomen luontokeskus Haltia on lasten ja aikuisten elämyksellinen vierailukohde, jonka näyttelyissä koko Suomen monipuolinen luonto esittäytyy. Kohtaat suomalaisen luonnon eläimiä ja maisemia etelän saaristoista Lapin tuntureille ja näet yhden vierailun aikana kaikki Suomen vuodenajat. Vaikuttavan visuaalisen päänäyttelysalin lisäksi pääset tutustumaan pääkaupunkiseudun luontoon, kuuntelemaan aitoja luonnonääniä Kirsi Ihalaisen Luontoäidin Kutsu -ääni-installaatiossa ja istuskelemaan autiotupaan. Jos uskallat, voit ryömiä ketunkoloon tai silittää talviuniaan nukkuvaa karhua! Haltiassa sinua ympäröivät Nuuksion Pitkäjärven huikeat maisemat sekä loistavat retkeilymaastot, ja Nuuksion kansallispuisto on lähellä. Lisäksi Haltiassa on retkeilyinfo, ravintola ja luontomyymälä.',
          sv: 'Finlands naturcentrum Haltia är ett nytt utställnings- och evenemangscentrum där man får uppleva pärlorna i Finlands natur under ett och samma tak. Haltias utställningar tar en med till de mäktiga landskapen i Finlands nationalparker och till huvudstadsregionens naturområden. Haltia vill erbjuda sina besökare berörande naturupplevelser, inspirera dem att ge sig ut i Finlands storslagna natur och stärka deras relation till naturen. I Haltia är man omringad av Noux Långträsks fina vyer och lätta naturleder, dessutom är Noux nationalpark nära. Här finns även information om Noux och andra nationalparker i Finland, samt en restaurang och naturbutik.',
          en: 'Haltia is modern exhibition and event venue, which showcases the splendour of Finnish nature. Haltia introduces Finland\'s natural parks and diverse wildlife, great hiking trails and the vibrant natural surroundings of the Helsinki region. The exhibits are designed to inspire visitors to go explore the nearby nature trails, southern archipelago, Lake Finland and even the snowy fells of Lapland. The building itself is "must to see": a combination of Finnish design, wood, sustainable elements and Kalevala, Finnish national epic. In Haltia you are surrounded by hikingtrails and the view of Nuuksio Pitkäjärvi Lake and the Nuuksio National Park is just a few kilometres away. Information on Nuuksio and other national parks in Finland available, and a restaurant and a nature shop.',
        },
        name: {
          fi: 'Haltia Suomen luontokeskus',
          sv: 'Haltia Finlands Naturcenter',
          en: 'Haltia The Finnish Natural Centre',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:28401/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p5121/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p6044/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p16596/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [],
      data_source: 'espoo',
      publisher: 'espoo:kaupunki',
      sub_events: [],
      images: [],
      in_language: [],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p16596/?format=json',
        },
      ],
      created_time: '2018-11-12T10:14:39.745822Z',
      last_modified_time: '2019-02-05T09:12:41.653303Z',
      date_published: '2018-11-12T08:55:00Z',
      start_time: '2018-11-02T22:00:00Z',
      end_time: '2019-05-12T20:59:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Haltia',
        en: 'Haltia',
      },
      short_description: {
        fi: 'Haltian historian ensimmäinen voimakkaasti kantaa ottava näyttely: Jälki. Näyttely tuo esiin ihmisen luontoon jättämää jälkeä pohjoismaisten valokuvaajien kuvien ja henkilökohtaisten tarinoiden kautta.',
        sv: 'Den första kraftigt ställningstagande utställningen i Haltias historia: Spår. Utställningen tar fram människans spår i naturen genom nordiska fotografers bilder och personliga berättelser. Fram till 12.5.2019!',
        en: 'Trace is the first ever exhibition at Haltia that speaks out strongly for the nature. Via photos by Nordic photographers and their personal stories, the exhibition brings out the human tracks in the nature. There are approximately 100 beautiful and powerful photos that will affect the viewers.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Haltia',
        sv: 'Haltia',
        en: 'Haltia',
      },
      info_url: {
        fi: 'https://www.haltia.com/jalki',
        sv: 'https://www.haltia.com/se/besoek-haltia/utstaellningar/specialutst%C3%A4llningar/sp%C3%A5r/',
        en: 'https://www.haltia.com/en/visit-haltia/exhibitions/special-exhibition/trace/',
      },
      description: {
        fi: '<p>Marraskuun alussa 2018 avataan Haltian historian ensimmäinen voimakkaasti kantaa ottava näyttely: Jälki. Näyttely tuo esiin ihmisen luontoon jättämää jälkeä pohjoismaisten valokuvaajien kuvien ja henkilökohtaisten tarinoiden kautta. Noin sata kaunista ja vahvaa kuvaa koskettavat katsojaansa. </p><p>Ihmisen elämästä on aina jäänyt jälki ympäröivään luontoon. Me Haltiassa olemme huolissamme siitä, että juuri nyt jälki on ennennäkemättömän voimakas. Synkät uutiset esimerkiksi sukupuuttoon kuolevista lajeista, voimistuvasta ilmastonmuutoksesta sekä merien ja luonnon roskaantumisesta ahdistavat meitä!</p><ul> <li>Haltia: <a href="https://www.haltia.com/jalki">Erikoisnäyttely Jälki</a></li>\n</ul>',
        sv: '<p>Den första kraftigt ställningstagande utställningen i Haltias historia: Spår. Utställningen tar fram människans spår i naturen genom nordiska fotografers bilder och personliga berättelser. Fram till 12.5.2019!</p><p>Människan har alltid lämnat spår efter sej i naturen. På Haltia är vi oroade av att spåren just nu är mera uppenbara än någonsin tidigare. Dystra nyheter om utdöende arter i en allt kraftigare klimatförändring och nedskräpningen av haven och naturen ger oss ångest!</p><ul> <li>Läs mera på <a href="https://www.haltia.com/se/besoek-haltia/utstaellningar/specialutst%C3%A4llningar/sp%C3%A5r/">Haltias webbplats</a></li>\n</ul>',
        en: '<p>Trace is the first ever exhibition at Haltia that speaks out strongly for the nature. Via photos by Nordic photographers and their personal stories, the exhibition brings out the human tracks in the nature. There are approximately 100 beautiful and powerful photos that will affect the viewers.<br><br>\nThe nature has always been affected by humans\' actions. We at Haltia are extremely worried that nowadays the track is very strong. Bad news about species dying off, ever increasing climate change and littering of the seas and the nature distress us!</p><ul> <li>Read more on the <a href="https://www.haltia.com/en/visit-haltia/exhibitions/special-exhibition/trace/">Haltia website</a></li>\n</ul>',
      },
      name: {
        fi: 'Erikoisnäyttely Jälki Haltiassa',
        sv: 'Haltias Spår',
        en: 'Haltia special exhibition: Trace',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/espoo:148732/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'matko:3469',
      location: {
        id: 'tprek:20444',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:vironniemi',
            municipality: 'Helsinki',
            name: {
              fi: 'Vironniemi',
              sv: 'Estnäs',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:kluuvi',
            municipality: 'Helsinki',
            name: {
              fi: 'Kluuvi',
              sv: 'Gloet',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:kluuvi',
            municipality: 'Helsinki',
            name: {
              fi: 'Kluuvi',
              sv: 'Gloet',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-01-08T06:09:53.286149Z',
        custom_data: null,
        email: 'ainfo@ateneum.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00100',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 109,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.944098,
            60.170094,
          ],
        },
        street_address: {
          fi: 'Kaivokatu 2',
          sv: 'Brunnsgatan 2',
          en: 'Kaivokatu 2',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.ateneum.fi',
          sv: 'http://www.ateneum.fi/?lang=sv',
          en: 'http://www.ateneum.fi/?lang=en',
        },
        telephone: {
          fi: '+358 29 450 0401',
        },
        description: {
          fi: 'Ateneum on maan tunnetuin taidemuseo ja Suomen taiteen koti. Ateneumin kuvat ovat iskostuneet suomalaisten yhteiseen muistiin: rakastetut kokoelmat kattavat aikakauden 1800-luvulta moderniin. Kotimaiset ja kansainväliset menestysnäyttelyt avaavat uusia näkökulmia menneeseen ja tulevaan. Vuorollaan vaihtuvien näyttelyiden tähtinä ovat vierailleet muun muassa Tove Jansson, Carl Larsson, Pablo Picasso ja Helene Schjerfbeck. Vuoteen 2020 esillä oleva värikäs Suomen taiteen tarina -näyttely on Ateneumin kokoelmien juhlaa. Näyttely johdattaa kävijän läpi Suomen taiteen kehityskulun vuodesta 1809 aina 1960-luvulle asti. Esillä ovat rinta rinnan kokoelmien kotimaiset ja kansainväliset mestariteokset kuten Le Corbusierin Kaksi naista (1939), Eero Järnefeltin Kaski (1893), Edvard Munchin Kylpeviä miehiä (1907-08) ja Ilja Repinin Natalia Nordmannin muotokuva (1900). Löydä omat lempiteoksesi ja ihastu uusiin tuttavuuksiin! Näyttelyiden lisäksi Ateneum järjestään joka kuukausi työpajoja, luentoja, opastuksia ja klubeja. Museossa myös museokauppa sekä Ateneum Bistro. Ateneumin taidemuseo on osa Kansallisgalleriaa yhdessä nykytaiteen museo Kiasman ja Sinebrychoffin taidemuseon kanssa.',
          sv: 'Ateneum är landets mest välkända museum och den finska konstens hem. Ateneums bilder har etsats in i finländarnas kollektiva minne: de älskade samlingarna täcker perioden från 1800-talet till modern tid. Museets inhemska och internationella succéutställningar öppnar nya perspektiv på det förflutna och på framtiden. Stjärnorna i Ateneums utställningar varierar, men verk av bland annat Tove Jansson, Carl Larsson, Pablo Picasso och Helene Schjerfbeck har hängt här. Fram till år 2020 berättar "Historier inom finsk konst" om den finska konstens utveckling från 1809 fram till 1960-talet. Sida vid sida finns inhemska och utländska mästerverk ur Ateneums samlingar, bland annat Le Corbusiers Två kvinnor (1939), Eero Järnefelts Sved (1893), Edvard Munchs Badande män (1907-08) och Ilja Repins Porträtt av Natalia Nordmann (1900). Hitta ditt eget favoritverk och låt dig fascineras av nya bekantskaper! Ateneum bjuder också på evenemang: varje månad ordnas verkstäder, föreläsningar, guidningar och klubbar. I museet finns även en museibutik samt Ateneum Bistro. Konstmuseet Ateneum utgör en del av Nationalgalleriet tillsammans med Museet för nutidskonst Kiasma och Sinebrychoffs konstmuseum.',
          en: 'The Ateneum is Finland\'s best-known art museum and the home of Finnish art. The images held by the Ateneum are ingrained in the collective memory of the Finnish people: the beloved works in Ateneum\'s collections date from the period from the 19th century to the modern age. The hugely popular exhibitions of Finnish and international art open up new perspectives into the past and the future. The guest stars of the temporary exhibitions have included names such as Tove Jansson, Carl Larsson, Pablo Picasso and Helene Schjerfbeck. To be on display until 2020, the Stories of Finnish Art exhibition celebrates the Ateneum collections. The exhibition guides visitors through the development of Finnish art, from 1809 up until the 1960s. On display, side by side, are Finnish and international masterpieces from Ateneum\'s collections, such as Le Corbusier\'s Two Women (1939), Eero Järnefelt\'s Under the Yoke (Burning the Brushwood) (1893), Edvard Munch\'s Bathing Men (1907-08) and Ilya Repin\'s Portrait of Natalia Nordmann (1900). Rediscover your favourite works of art and fall in love with new ones! Ateneum is home to events of all kinds: every month, the museum organises workshops, lectures, guided tours and clubs. The museum also hosts a museumshop and the Ateneum Bistro. Ateneum Art Museum is part of the Finnish National Gallery, together with the Museum of Contemporary Art Kiasma and Sinebrychoff Art Museum.',
        },
        name: {
          fi: 'Ateneumin taidemuseo',
          sv: 'Konstmuseet Ateneum',
          en: 'Ateneum Art Museum',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:20444/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p5121/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2851/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p6889/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventRescheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: {
            fi: '17/15€, alle 18-vuotiaat ilmaiseksi',
            sv: '17/15€, under 18 år fritt inträde',
            en: '17/15€, under 18 yrs free entry',
          },
          info_url: {
            fi: 'http://www.ateneum.fi',
            sv: 'http://www.ateneum.fi',
            en: 'http://www.ateneum.fi',
          },
          description: {
            fi: '',
            sv: '',
            en: '',
          },
        },
      ],
      data_source: 'matko',
      publisher: 'ytj:0586977-6',
      sub_events: [],
      images: [
        {
          id: 40177,
          license: 'event_only',
          created_time: '2017-11-17T14:24:30.493498Z',
          last_modified_time: '2017-11-17T14:24:30.493535Z',
          name: 'Helene Schjerbeck - Toipilas',
          url: 'http://api.hel.fi/linkedevents/media/images/helene-schjerfbeck-toipilas.jpg',
          cropping: '120,0,1480,1360',
          photographer_name: 'Kansallisgalleria Yehia Eweis',
          data_source: 'helsinki',
          publisher: 'ytj:0586977-6',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/40177/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: null,
      last_modified_time: '2019-01-31T11:35:24.922454Z',
      date_published: '2016-03-17T22:00:00Z',
      start_time: '2016-03-18T08:00:00Z',
      end_time: '2020-12-31T18:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Ateneumin taidemuseo',
        sv: 'Konstmuseet Ateneum',
        en: 'Ateneum Art Museum',
      },
      short_description: {
        fi: 'Ateneumin taidemuseossa on maan vanhin ja laajin taidekokoelma. Kokoelmanäyttely esittää maan rakastetuimmat klassikot uudessa valossa. ',
        sv: 'I konstmuseet Ateneum finns landets äldsta och mest omfattande konstsamling. ',
        en: 'The Ateneum Art Museum has the country’s oldest and largest art collection.',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'http://www.ateneum.fi',
        sv: 'http://www.ateneum.fi',
        en: 'http://www.ateneum.fi',
      },
      description: {
        fi: '<p>Ateneumin taidemuseossa on maan vanhin ja laajin taidekokoelma. Kokoelmanäyttely esittää maan rakastetuimmat klassikot uudessa valossa. Se nostaa esiin uusia teoksia ja rinnastuksia, luoden samalla yhteyden niin Suomen kuin maailman historiaan.</p><p>Näyttely johdattaa kävijän läpi Suomen taiteen kehityskulun vuodesta 1809 aina 1970-luvulle asti. Näyttelyssä Suomen taiteen tarina kytketään taiteen kansainväliseen kehitykseen ja yhteiskunnallisiin tapahtumiin. </p><p>Modernin taiteen salit luovat katseen toisen maailmansodan jälkeiseen jälleenrakennuksen ja alkavan mediayhteiskunnan aikaan. Esillä on maalauksia, veistoksia ja grafiikkaa sekä kotimaisilta että ulkomaisilta taiteilijoilta. Mukana on ulkomaista grafiikkaa, joka vaihtuu säännöllisesti. Näyttelyssä nähdään myös Eino Ruutsalon kokeellisia elokuvia ja mainoksia.</p><p>Arkistosalista löytyvät kirjeet, luonnoskirjat, postikortit ja valokuvat muuttavat taiteilijoiden arjen eläväksi. Tiheä salonkiripustus vie ajatukset talon historiaan sadan vuoden taakse.</p><p>Ateneumin taidemuseo<br>18.3.2016-31.12.2020</p><p>Ti, pe klo 10-18<br>Ke, to klo 10-20<br>La, su klo 10-17</p><p>Sisäänpääsy 17/15€, alle 18-vuotiaat ilmaiseksi</p>',
        sv: '<p>I konstmuseet Ateneum finns landets äldsta och mest omfattande konstsamling. Samlingsutställning Historier inom finsk konst presenterar Finlands mest älskade klassiker i ett nytt ljus. Utställningen lyfter denna gång fram de gamla pärlorna tillsammans med nya verk och pekar samtidigt på kopplingar till historien.</p><p>Historier inom finsk konst berättar om den finska konstens utveckling från 1809 fram till 1970-talet. Utställningen drar nya paralleller mellan den finska konstens historia, den internationella utvecklingen och olika företeelser i samhället. </p><p>I de salarna med modern konst blickar Historier inom finsk konst mot tiden efter andra världskriget, återuppbyggnadsarbetet och mediesamhällets början. Här finns målningar, skulpturer och grafik av både inhemska och utländska konstnärer. I utställningen ingår också Eino Ruutsalos experimentella filmer och reklamer.</p><p>Brev, skissböcker, postkort och fotografier som visas i arkivsalen gör konstnärernas vardag levande. Salongshängningen med verk tätt intill varandra för tankarna hundra år tillbaka i byggnadens historia.</p><p>Konstmuseet Ateneum<br>18.3.2016-31.12.2020</p><p>Ti, fre kl 10-18<br>Ons, to kl 10-20<br>Lö, sö kl 10-17</p><p>Inträde 17/15€, under 18 år fritt inträde</p>',
        en: '<p>The Ateneum Art Museum has the country’s oldest and largest art collection. The collections exhibition presents well-loved classics alongside seldom-exhibited works of art. It draws new parallels and highlights works that have not been on show for a long time.</p><p>Stories of Finnish Art illustrates the development of art in Finland from 1809 until the 1970s. At the exhibition, the story of Finnish art is juxtaposed with international developments in art and contemporary social events. </p><p>The works on display in the halls of modern art highlight the post-Second World War reconstruction period and the emergent media society. The exhibition will feature paintings, sculptures and prints by Finnish and foreign artists. The exhibition will also include Eino Ruutsalo’s experimental films and advertisements.</p><p>The letters, sketchbooks, postcards and photographs on display in the archive hall vividly illustrate the daily lives of the artists. The dense, salon exhibition style recalls the history of the building, going back more than a century.</p><p>Ateneum Art Museum<br>18.3.2016-31.12.2020</p><p>Tue, Fri  10.00-18.00<br>Wed, Thu  10.00-20.00<br>Sat, Sun  10.00-17.00</p><p>Admission fee 17/15€, under 18 yrs free entry</p>',
      },
      name: {
        fi: 'Suomen taiteen tarina',
        sv: 'Historier inom finsk konst',
        en: 'Stories of Finnish Art',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/matko:3469/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'ham:3828',
      location: {
        id: 'tprek:8675',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:kampinmalmi',
            municipality: 'Helsinki',
            name: {
              fi: 'Kampinmalmi',
              sv: 'Kampmalmen',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:kamppi',
            municipality: 'Helsinki',
            name: {
              fi: 'Kamppi',
              sv: 'Kampen',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:kamppi',
            municipality: 'Helsinki',
            name: {
              fi: 'Kamppi',
              sv: 'Kampen',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2018-10-25T05:09:28.369118Z',
        custom_data: null,
        email: null,
        contact_type: null,
        address_region: null,
        postal_code: '00100',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 436,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.930195,
            60.170155,
          ],
        },
        street_address: {
          fi: 'Eteläinen Rautatiekatu 8',
          sv: 'Södra Järnvägsgatan 8',
          en: 'Eteläinen Rautatiekatu 8',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.hamhelsinki.fi',
          sv: 'http://www.hamhelsinki.fi/sv/',
          en: 'http://www.hamhelsinki.fi',
        },
        telephone: {
          fi: '09 310 87001',
        },
        description: null,
        name: {
          fi: 'HAM Helsingin taidemuseo Tennispalatsi',
          sv: 'HAM Helsingfors konstmuseum Tennispalatset',
          en: 'Tennis Palace Art Museum',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:8675/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8144/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2851/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p9593/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2739/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4934/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p6889/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p9592/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventRescheduled',
      external_links: [],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: {
            fi: 'Ilmainen sisäänpääsy',
            sv: 'Fritt inträde',
            en: 'Free admission',
          },
        },
      ],
      data_source: 'ham',
      publisher: 'ahjo:u4804001040',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800001/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800002/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800003/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800004/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800005/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800006/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800007/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800008/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800009/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800010/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800011/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800012/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800013/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800014/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800015/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800016/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800017/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800018/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800019/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800020/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800021/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800022/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800023/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800024/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:382800025/?format=json',
        },
      ],
      images: [
        {
          id: 45619,
          license: 'event_only',
          created_time: '2018-07-03T05:46:40.879232Z',
          last_modified_time: '2018-07-03T05:46:40.879266Z',
          name: 'ham-image',
          url: 'https://www.hamhelsinki.fi/wp-content/uploads/2015/08/Työpaja-26.8.-Kohtaaminen.-1600x1160.jpg',
          cropping: '',
          photographer_name: null,
          data_source: 'ham',
          publisher: 'ahjo:u4804001040',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/45619/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: '2018-07-03T05:46:49.709750Z',
      last_modified_time: '2019-01-29T12:37:51.747930Z',
      date_published: null,
      start_time: '2019-01-05T11:00:00Z',
      end_time: '2019-05-25T13:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: null,
      short_description: {
        fi: 'Ota taide omaksesi itse tekemällä ja yhdessä kokemalla! Tule sellaisena kuin olet; ennakko-osaami…',
        sv: 'Ta fram konstnären i dig, ensam eller tillsammans! Kom som du är; ingen förhandskunskap behövs!\n…',
        en: 'Immerse yourself in art by creating and experiencing it in good company! Join as you are; no prior k…',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'https://www.hamhelsinki.fi/event/lauantaipaja/',
        sv: 'https://www.hamhelsinki.fi/sv/event/lordagsverkstader-oppna-for-alla/',
        en: 'https://www.hamhelsinki.fi/en/event/art-workshops-on-saturdays/',
      },
      description: {
        fi: '<p>Ota taide omaksesi itse tekemällä ja yhdessä kokemalla! Tule sellaisena kuin olet; ennakko-osaamista ei tarvita!</p>Kaikille avoimet lauantaipajat<ul><li>Joka lauantai klo 14–16</li><li>Teemat ja tekniikat vaihtelevat näyttelyiden mukaan.</li><li>Kaikenikäisille, alle 10-vuotiaat aikuisen seurassa.</li><li>Ei ennakkoilmoittautumista.</li></ul><p>Lauantaipajat talvi/kevät 2019</p><p>5.1. Piirrä ja hankaa. Tehdään kuvia frottage-tekniikalla erilaisilla piirtimillä ja papereilla.</p><p>12.1. Metsän siimeksessä. Raapekartonki.</p><p>19.1. Kollaasi-omakuva. Tehdään erilaisista kuvamateriaaleista omakuva</p><p>26.1. Miniatyyripastissit. Tehdään pieniä maalauksia kokoelmanäyttelyn pohjalta akryyliväreillä.</p><p>2.2. Osallistuva ornamentti. Uutiskuvien tuunausta kollaasitekniikalla.</p><p>9.2. Väritä tweediä! Pienten kuvien tarkkaa piirtämistä.</p><p>16.2. Omakuva peilistä. Piirtämistä.</p><p>23.2. Mustaa, valkoista ja punaista. Rajatulla väripaletilla maalausta.</p><p>2.3. Runoista kuviksi. Tussipiirroksia ja akvarellimaalauksia.</p><p>9.3. Omakuva satavuotiaana. Piirtämistä eri tekniikoilla.</p><p>16.3. Kaikista kaunein harmaa. Työskentely harmaan eri sävyillä.</p><p>23.3. Henkilö tilassa. Sekatekniikkatöitä paperille lehdistä leikatuilla sabluunoilla.</p><p>30.3. Piirrä pöytään! Maalitusseilla yhteispiirustus.</p><p>6.4. Naapurit. Yhteismaalausta.</p><p>13.4. Out of the Box. Laatikkoveistoksia kierrätysmateriaaleista.</p><p>20.4. Vieras, ystävä ja minä. Miniveistoksia kierrätysmateriaaleista.</p><p>27.4. Juhlat! Kohopainantaa eri tekniikoilla.</p><p>4.5. Hyvin hiljainen jälki. Tussipiirustusta.</p><p>11.5. Muisto matkasta. Akryylimaalausta palettiveitsellä.</p><p>18.5. Moderni kevätasetelma. Akryylimaalausta.</p><p>25.5. Maisema sisälläni. Maalauksia kuiva- tai öljypastelliliiduilla.</p>',
        sv: '<p>Ta fram konstnären i dig, ensam eller tillsammans! Kom som du är; ingen förhandskunskap behövs!</p>Lördagsverkstäder öppna för alla<ul><li>Varje lördag kl. 14–16</li><li>Temana och teknikerna varierar enligt utställning.</li><li>För alla åldrar, barn under 10 år tillsammans med en vuxen.</li><li>Ingen förhandsanmälan.</li></ul><p>Lördagsverkstäder vinter/våren 2019</p><p>5.1. Rita och gnugga. Vi gör bilder med frottage-teknik med olika slags ritstift och papper.</p><p>12.1. I skogens skugga. Skrapkartong.</p><p>19.1. Kollageporträtt. Vi gör självporträtt av olika bildmaterial.</p><p>26.1. Miniatyrpastischer. Vi gör små målningar med akrylgfärger utgående från samlingsutställningen.</p><p>2.2. Engagerande ornament. Vi gör nyhetsbilder med collageteknik.</p><p>9.2. Färglägg tweed! Noggrann färgläggning av små bilder.</p><p>16.2. Självporträtt i spegel. Vi tecknar.</p><p>23.2. Svart, vitt och rött. Vi målar med begränsad palett.</p><p>2.3. Från dikt till bild. Tuschteckning och akvarellmåleri.</p><p>9.3. Självporträtt som hundraåring. Teckning på olika sätt.</p><p>16.3. Den vackraste grå. Vi målar i gråa nyanser.</p><p>23.3. Person i ett rum. Blandteknik och användning av bl.a. schabloner.</p><p>30.3. Rita på bordet! Vi gör en gemensam teckning med akryltusch.</p><p>6.4. Grannar. Vi målar tillsammans.</p><p>13.4. Out of the Box. Vi gör skulpturer av återvinningsmaterial.</p><p>20.4. Främling, vän och jag. Vi gör miniskulpturer av återvinningsmaterial.</p><p>27.4. Fest! Högtryck med olika grafiska tekniker.</p><p>4.5. Väldigt tysta spår. Tuschteckning.</p><p>11.5. Ett minne från en resa. Vi målar i akryl med palettkniv.</p><p>18.5. Modern vår-stilleben. Vi målar i akryl.</p><p>25.5. Inre landskap. Vi målar med torr- och oljepastellkritor.</p>',
        en: '<p>Immerse yourself in art by creating and experiencing it in good company! Join as you are; no prior knowledge or skill required!</p><p>Open workshops on Saturdays </p><ul><li>Every Saturday 14:00–16:00</li><li>Different themes and techniques based on current exhibitions.</li><li>For all ages, children under the age of 10 must be accompanied by an adult.</li><li>No advance registration required.</li></ul><p>Saturday art workshop Winter/Spring 2019</p><p>5.1. Draw and rub. Create frottage images with different implements and papers.</p><p>12.1. In the depths of the forest. Scratchboard workshop.</p><p>19.1. Self-portrait collage. Create a self-portrait from a variety of materials.</p><p>26.1. Miniature pastiche. Create small paintings inspired by the collection exhibition. Medium: acrylic paint.</p><p>2.2. Engaged ornament. We create news pictures with collage technique.</p><p>9.2. Colouring tweed! Detailed colouring of small pictures.</p><p>16.2. Self portrait through mirror. Drawing.</p><p>23.2. Black, white and red. Painting with limited palette.</p><p>2.3. From poem to picture. Ink drawing and watercolor.</p><p>9.3. Self portrait as a hundred years old. Drawing in different methods.</p><p>16.3. The most beautiful grey. Painting in different grey shades.</p><p>23.3. A person in a space. Mixed media and stencils.</p><p>30.3. Draw on the table! Drawing together with acrylic paint markers.</p><p>6.4. Neighbours. Painting together.</p><p>13.4. Out of the Box. Sculptures of recycled materials.</p><p>20.4. Stranger, friend and me. Mini Sculptures of recycled materials.</p><p>27.4. Party! Printmaking with different relief techniques.</p><p>4.5. Very silent trails. Inc drawing.</p><p>11.5. Travel memories. Acryl painting with the palette knife.</p><p>18.5. Modern spring still life. Acrylic painting.</p><p>25.5. Inner landscape. Painting with soft and oil pastels.</p>',
      },
      name: {
        fi: 'Lauantaipaja',
        sv: 'Lördagsverkstad',
        en: 'Saturday Art Workshop',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/ham:3828/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftreqaxtm',
      location: {
        id: 'tprek:20406',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:espoo',
            municipality: null,
            name: {
              fi: 'Espoo',
              sv: 'Esbo',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-04-04T14:09:17.263557Z',
        custom_data: null,
        email: 'info@emma.museum',
        contact_type: null,
        address_region: null,
        postal_code: '02100',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 32,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.796156,
            60.178574,
          ],
        },
        street_address: {
          fi: 'Ahertajantie 5',
          sv: 'Flitarvägen 5',
          en: 'Ahertajantie 5',
        },
        address_locality: {
          fi: 'Espoo',
          sv: 'Esbo',
          en: 'Espoo',
        },
        info_url: {
          fi: 'http://www.emma.museum/',
          sv: 'http://www.emma.museum/sv',
          en: 'http://www.emma.museum/en',
        },
        telephone: {
          fi: '09 8163 0493',
        },
        description: {
          fi: 'EMMA - Espoon modernin taiteen museo. Näyttelykeskus WeeGee.',
          sv: 'EMMA - Esbo moderna konstmuseum. Utställningscentret WeeGee.',
          en: 'EMMA - Espoo Museum of Modern Art. Exhibition Centre WeeGee.',
        },
        name: {
          fi: 'EMMA - Espoon modernin taiteen museo',
          sv: 'EMMA - Esbo moderna konstmuseum',
          en: 'EMMA - Espoo Museum of Modern Art',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:20406/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p360/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2108/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p6889/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2851/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: {
            fi: '12/0€',
            sv: '12/0€',
            en: '12/0€',
          },
          info_url: {
            fi: 'https://emmamuseum.fi/nayttely/alicja-kwade-trans-for-men/',
            sv: 'https://emmamuseum.fi/sv/utstallningar/alicja-kwade-trans-for-men/',
            en: 'https://emmamuseum.fi/en/exhibitions/alicja-kwade-trans-for-men/',
          },
          description: {
            fi: '',
            sv: '',
            en: '',
          },
        },
      ],
      data_source: 'helsinki',
      publisher: 'ytj:0586977-6',
      sub_events: [],
      images: [
        {
          id: 50089,
          license: 'event_only',
          created_time: '2018-11-14T12:35:17.518374Z',
          last_modified_time: '2018-11-14T12:35:17.518397Z',
          name: 'Alicja Kwade: Trans-For-Men',
          url: 'http://api.hel.fi/linkedevents/media/images/AK18_Trans-For-Men_0025-1.jpg',
          cropping: '240,0,1680,1439',
          photographer_name: 'EMMA (c) Ari Karttunen',
          data_source: 'helsinki',
          publisher: 'ytj:0586977-6',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/50089/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: '2018-11-14T12:44:09.505382Z',
      last_modified_time: '2019-01-25T12:10:44.444084Z',
      date_published: null,
      start_time: '2018-10-10T08:00:00Z',
      end_time: '2019-04-28T14:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'EMMA',
        sv: 'EMMA',
        en: 'EMMA',
      },
      short_description: {
        fi: 'Kansainvälisissä taidebiennaaleissa menestynyt Alicja Kwade esittäytyy ensimmäistä kertaa Suomessa näyttelyllään Trans-For-Men. ',
        sv: 'Alicja Kwade är en konstnär som skördat lagrar på internationella konstbiennaler. Nu framträder hon för första gången i Finland med utställningen ',
        en: 'Alicja Kwade, a contemporary artist widely celebrated in recent international art biennials, makes her Finnish debut with her solo show Trans-For-Men.',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'https://emmamuseum.fi/nayttely/alicja-kwade-trans-for-men/',
        sv: 'https://emmamuseum.fi/sv/utstallningar/alicja-kwade-trans-for-men/',
        en: 'https://emmamuseum.fi/en/exhibitions/alicja-kwade-trans-for-men/',
      },
      description: {
        fi: '<p>Kansainvälisissä taidebiennaaleissa menestynyt Alicja Kwade esittäytyy ensimmäistä kertaa Suomessa näyttelyllään Trans-For-Men. </p><p>Saastamoisen säätiön tilausteoksen ympärille rakentuva näyttely syventää kuvaa taiteilijan ajankohtaisesta tuotannosta. </p><p>Kwade on suunnitellut näyttelynsä varta vasten EMMAn ainutlaatuista arkkitehtuuria silmällä pitäen.</p><p>EMMA – Espoon modernin taiteen museo</p><p>10.10.2018–28.4.2019</p><p>Ti &amp; to klo 11-18<br>Ke &amp; pe klo 11-19<br>La &amp; su klo 11-17</p><p>Sisäänpääsy 12/0€</p><p>Ilmaisilta EMMAssa 1.2. klo 17–21<br>Ilmaisillan yleisöopastus klo 18 suuntautuu Alicja Kwaden näyttelyyn ja Saastamoisen säätiön taidekokoelmaan. </p>',
        sv: '<p>Alicja Kwade är en konstnär som skördat lagrar på internationella konstbiennaler. Nu framträder hon för första gången i Finland med utställningen Trans-For-Men på EMMA. </p><p>Bilden av Kwades aktuella produktion fördjupas i utställningen som byggs upp kring ett beställningsverk av Saastamoinenstiftelsen. </p><p>Kwade har planerat sin utställning enkom med tanke på EMMAs unika arkitektur.</p><p>EMMA - Esbo moderna konstmuseum</p><p>10.10.2018–28.04.2019</p><p>Ti &amp; to kl 11-18<br>Ons &amp; fre kl 11-19<br>Lö &amp; sö kl 11-17</p><p>Inträdesavgift 12/0€</p><p>Fritt inträde 1.2. kl 17-21</p>',
        en: '<p>Alicja Kwade, a contemporary artist widely celebrated in recent international art biennials, makes her Finnish debut with her solo show Trans-For-Men. </p><p>The exhibition, that is built around a commission by the Saastamoinen Foundation, sheds light on the artist’s current practice. </p><p>Kwade has planned her exhibition to interact with the museum’s unique architecture. </p><p>EMMA – Espoo Museum of Modern Art</p><p>10.10.2018–28.04.2019</p><p>Tue &amp; Thu 11.00-18.00<br>Wed &amp; Fri 11.00-19.00<br>Sat &amp; Sun 11.00-17.00</p><p>Admission fee 12/0€</p><p>Free entry 1.2.  17.00-21.00</p>',
      },
      name: {
        fi: 'Alicja Kwade: Trans-For-Men',
        sv: 'Alicja Kwade: Trans-For-Men',
        en: 'Alicja Kwade: Trans-For-Men',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftreqaxtm/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'matko:17605',
      location: {
        id: 'tprek:21319',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:ullanlinna',
            municipality: 'Helsinki',
            name: {
              fi: 'Ullanlinna',
              sv: 'Ulrikasborg',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:kaartinkaupunki',
            municipality: 'Helsinki',
            name: {
              fi: 'Kaartinkaupunki',
              sv: 'Gardesstaden',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:kaartinkaupunki',
            municipality: 'Helsinki',
            name: {
              fi: 'Kaartinkaupunki',
              sv: 'Gardesstaden',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-01-08T06:10:43.695059Z',
        custom_data: null,
        email: 'info@designmuseum.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00130',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 46,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.946611,
            60.16303,
          ],
        },
        street_address: {
          fi: 'Korkeavuorenkatu 23',
          sv: 'Högbergsgatan 23',
          en: 'Korkeavuorenkatu 23',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.designmuseum.fi',
          sv: 'http://www.designmuseum.fi/sv',
          en: 'http://www.designmuseum.fi/en',
        },
        telephone: {
          fi: '+358 9 622 0540',
        },
        description: {
          fi: 'Designmuseo on suomalaisen muotoilun valtakunnallinen erikoismuseo. Designmuseo tarjoaa ainutlaatuisia muotoilukokemuksia ja uusia näkökulmia moniulotteiseen muotoiluun niin Suomessa kuin kansainvälisesti. Suomen itsenäisyyden juhlavuoden kunniaksi Designmuseo avasi täysin uudistetun suomalaisen muotoiluhistorian kokoelmanäyttelyn joka on esillä vuoteen 2020 asti. Museossa järjestetään mm.opastuksia ja työpajoja. Museossa myös Juuri Café & Bar sekä museokauppa.',
          sv: 'Designmuseet är ett specialmuseum för finsk design. Museet erbjuder enastående upplevelser inom formgivningen och nya synvinklar till mångfaldet i formgivningen i Finland och internationellt. För att hylla jubileumsåret för Finlands självständighet öppnade Designmuseet en helt förnyad samlingsutställning som omfattar finsk formgivningshistoria. Utställningen pågår ända till år 2020. Museet erbjuder även guidningar och verkstäder. I museet finns även Juuri Café & Bar och en museibutik.',
          en: 'The Design Museum is an internationally recognized national specialist museum of Finnish design. In honour of the centenary of Finnish independence in 2017, the Design Museum opened its completely renewed collections exhibition which will be displayed until 2020. The museum organizes also workshops and guided tours. Juuri Café & Bar and museum shop.',
        },
        name: {
          fi: 'Designmuseo',
          sv: 'Designmuseet',
          en: 'Design Museum',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:21319/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p5121/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p6455/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p12676/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventRescheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: {
            fi: '12-6€, alle 18-vuotiaat ilmaiseksi',
            sv: '12-6€, under 18 år fritt inträde',
            en: '12-6€, under 18 yrs free entry',
          },
          info_url: {
            fi: 'http://www.designmuseum.fi',
            sv: 'http://www.designmuseum.fi',
            en: 'http://www.designmuseum.fi',
          },
          description: {
            fi: '',
            sv: '',
            en: '',
          },
        },
      ],
      data_source: 'matko',
      publisher: 'ytj:0586977-6',
      sub_events: [],
      images: [
        {
          id: 40946,
          license: 'event_only',
          created_time: '2017-12-12T13:05:07.867639Z',
          last_modified_time: '2017-12-12T13:05:07.867680Z',
          name: 'Utopia nyt - Kertomus suomalaisesta muotoilusta',
          url: 'http://api.hel.fi/linkedevents/media/images/dm_design-by-tapio-wirkkala.jpg',
          cropping: '320,0,1600,1280',
          photographer_name: 'Designmuseo (c) Rauno Träskelin',
          data_source: 'helsinki',
          publisher: 'ytj:0586977-6',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/40946/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: null,
      last_modified_time: '2019-01-22T07:00:18.234833Z',
      date_published: '2017-02-03T22:00:00Z',
      start_time: '2017-02-04T09:00:00Z',
      end_time: '2020-12-31T16:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Designmuseo',
        sv: 'Designmuseet',
        en: 'Design Museum',
      },
      short_description: {
        fi: 'Suomen itsenäisyyden juhlavuoden kunniaksi Designmuseo avasi täysin uudistetun kokoelmanäyttelyn, joka kertoo muotoilun olennaisesta roolista',
        sv: 'För att hylla jubileumsåret för Finlands självständighet öppnade Designmuseet en helt förnyad samlingsutställning.',
        en: 'In honour of the centenary of Finnish independence in 2017, Design Museum opened its completely renewed collections exhibition.',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'http://www.designmuseum.fi',
        sv: 'http://www.designmuseum.fi',
        en: 'http://www.designmuseum.fi',
      },
      description: {
        fi: '<p>Suomen itsenäisyyden juhlavuoden kunniaksi Designmuseo avaa täysin uudistetun kokoelmanäyttelyn, joka kertoo muotoilun olennaisesta roolista suomalaisen hyvinvointivaltion kehityksessä. Muotoilun kohteet ja tarpeet ovat muuttuneet vuosien varrella. Esineiden ja kalusteiden suunnittelu ei ole loppunut, mutta nyt teknologian sekä yhteiskunnan haasteisiin vastataan lisäksi tarjoamalla niin palveluita kuin käyttöliittymiä, konsepteja ja elämyksiä. Muotoilu on jatkuvassa muutostilassa. Sen määritelmä muuttuu koko ajan vastaamaan paremmin ympäröivää yhteiskuntaamme ja elämismaailmaamme. Mikä on muotoilun rooli tämän päivän hyvinvointivaltion peruspilarina - onko se utopiaa?</p><p>Utopian takana 18.9.2018-3.2.2019<br>Aalto-yliopiston informaatiomuotoilun opiskelijat ovat koostaneet näyttelyn Designmuseon kokoelmanäyttelyn Vaihtuvaan tilaan, jossa yksittäisten esineiden sijasta tarkastellaan Designmuseon esinekokoelmaa kokonaisuutena. <br>Näyttelyssä voi tilastollisten visualisointien kautta tutkia, mitä materiaaleja, esineitä ja kenen suunnittelijan tuotantoa museo on kerännyt eri vuosikymmenten aikana. Näyttely haastaa pohtimaan museon päättäjien vuosikymmenten varrella tekemiä päätöksiä. Millaisia esineitä kokoelmiin on hankittu ja millaisia ei? Keiden suunnittelijoiden tuotanto on kokoelmissa kattavasti esillä ja keiden ei?</p><p>Designmuseo<br>Ti klo 11-20, ke-su klo 11-18</p><p>Sisäänpääsy 12-6€, alle 18-vuotiaat ilmaiseksi</p>',
        sv: '<p>För att hylla jubileumsåret för Finlands självständighet öppnar Designmuseet en helt förnyad samlingsutställning. Utställningen berättar om formgivningens viktiga roll i utvecklingen av den finska välfärdsstaten. Utställningen är uppdelad under fem teman, där formgivningens historia berättas på ett levande sätt: Digitala applikationer gör det möjligt att presentera aldrig tidigare skådade material och en mångfaldig datamängd. Samtidigt fördjupar de utställningsupplevelsen genom att de beaktar museets olika användargrupper i allt från turister till elevgrupper.</p>',
        en: '<p>In honour of the centenary of Finnish independence in 2017, Design Museum will open its completely renewed collections exhibition. This exhibition presents the integral role of design in the evolution of the Finnish welfare state. It has five themes illustrating the history of design through living stories. The exhibition\'s digital applications permit the display of materials that have not been shown before and can provide amounts of information many times greater than previously. They will also enhance and deepen the exhibition experience by taking into account the museum\'s different groups of users, from tourists to schoolchildren.</p>',
      },
      name: {
        fi: 'Utopia nyt - Kertomus suomalaisesta muotoilusta',
        sv: 'Utopi nu - En berättelse om finländsk formgivning',
        en: 'Utopia Now - The Story of Finnish Design',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/matko:17605/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:afufbmtgxq',
      location: {
        id: 'tprek:500',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:itä-pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Itä-Pakila',
              sv: 'Östra Baggböle',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:itä-pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Itä-Pakila',
              sv: 'Östra Baggböle',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Pakila',
              sv: 'Baggböle',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.647682Z',
        custom_data: null,
        email: 'lp.etupelto@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00680',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 77,
        image: 54050,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.960117,
            60.242825,
          ],
        },
        street_address: {
          fi: 'Etupellontie 8',
          sv: 'Framåkersvägen 8',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
        },
        telephone: {
          fi: '09 310 69970',
        },
        description: {
          fi: 'Leikkipuisto Etupellossa on pelikenttä, joka talvisin jäädytetään luistelukentäksi. Leikkipuistossa on myös kahluu-allas, kiipeilytelineitä, leinut sekä leikkivälineitä, jotka tukevat liikunnallista toimintaa.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Etupelto',
          sv: 'Lekparken Etupelto',
          en: 'Playground Etupelto',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:500/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmscxi/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Government-Organization/Leikkipuisto-Etupelto-1839261636360380/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201003',
      sub_events: [],
      images: [
        {
          id: 48288,
          license: 'event_only',
          created_time: '2018-11-06T09:00:02.495102Z',
          last_modified_time: '2018-11-06T09:00:02.495124Z',
          name: '20180816_090514.jpg',
          url: 'http://api.hel.fi/linkedevents/media/images/20180816_090514.jpg',
          cropping: '0,72,433,505',
          photographer_name: 'Leikkipuisto Etupelto',
          data_source: 'helsinki',
          publisher: 'helsinki:u42030010201003',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/48288/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p20513/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
      ],
      created_time: '2019-01-15T08:48:15.572559Z',
      last_modified_time: '2019-01-15T08:48:15.572599Z',
      date_published: null,
      start_time: '2018-11-09T07:30:00Z',
      end_time: '2019-05-31T08:30:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: null,
      short_description: {
        fi: 'Perheperjantaina liikutaan ja leikitään. Välillä ohjatuissa tuokioissa myös aikuisen ja lapsen yhteisiä askartelupuuhia ja vuodenajan mukaisia teemoja.',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
      },
      description: {
        fi: '<p>Perheperjantaissa viihtyvät kaikenikäiset vauvasta vaariin. Aamuissa on toiminnallisia tuokioita tai kauden mukaisia askarteluja sisällä/ulkona. Toimintahetket ovat klo. 10. Voit lämmittää omia ruokia sekä keittää kahvia tai teetä. Myös grilli käytössä omille eväille. Tervetuloa mukaan suunnittelemaan toimintaa yhdessä ohjaajien kanssa!</p>',
      },
      name: {
        fi: 'Perheperjantai leikkipuisto Etupellossa',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtgxq/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:afufbmscxi',
      location: {
        id: 'tprek:500',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:itä-pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Itä-Pakila',
              sv: 'Östra Baggböle',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:itä-pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Itä-Pakila',
              sv: 'Östra Baggböle',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Pakila',
              sv: 'Baggböle',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.647682Z',
        custom_data: null,
        email: 'lp.etupelto@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00680',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 77,
        image: 54050,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.960117,
            60.242825,
          ],
        },
        street_address: {
          fi: 'Etupellontie 8',
          sv: 'Framåkersvägen 8',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
        },
        telephone: {
          fi: '09 310 69970',
        },
        description: {
          fi: 'Leikkipuisto Etupellossa on pelikenttä, joka talvisin jäädytetään luistelukentäksi. Leikkipuistossa on myös kahluu-allas, kiipeilytelineitä, leinut sekä leikkivälineitä, jotka tukevat liikunnallista toimintaa.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Etupelto',
          sv: 'Lekparken Etupelto',
          en: 'Playground Etupelto',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:500/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Government-Organization/Leikkipuisto-Etupelto-1839261636360380/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201003',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtgxq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmthzq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmti2y/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtkhy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtlym/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtnby/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtotq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtqcq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtrvu/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmttqi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtu7m/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtwpq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmtya4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmt2by/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmt3gu/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmt4xu/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmt54m/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmt64e/?format=json',
        },
      ],
      images: [
        {
          id: 48288,
          license: 'event_only',
          created_time: '2018-11-06T09:00:02.495102Z',
          last_modified_time: '2018-11-06T09:00:02.495124Z',
          name: '20180816_090514.jpg',
          url: 'http://api.hel.fi/linkedevents/media/images/20180816_090514.jpg',
          cropping: '0,72,433,505',
          photographer_name: 'Leikkipuisto Etupelto',
          data_source: 'helsinki',
          publisher: 'helsinki:u42030010201003',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/48288/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p20513/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
      ],
      created_time: '2019-01-15T08:48:06.343275Z',
      last_modified_time: '2019-01-15T08:48:06.343312Z',
      date_published: null,
      start_time: '2018-11-09T07:30:00Z',
      end_time: '2019-05-31T08:30:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: null,
      short_description: {
        fi: 'Perheperjantaina liikutaan ja leikitään. Välillä ohjatuissa tuokioissa myös aikuisen ja lapsen yhteisiä askartelupuuhia ja vuodenajan mukaisia teemoja.',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
      },
      description: {
        fi: '<p>Perheperjantaissa viihtyvät kaikenikäiset vauvasta vaariin. Aamuissa on toiminnallisia tuokioita tai kauden mukaisia askarteluja sisällä/ulkona. Toimintahetket ovat klo. 10. Voit lämmittää omia ruokia sekä keittää kahvia tai teetä. Myös grilli käytössä omille eväille. Tervetuloa mukaan suunnittelemaan toimintaa yhdessä ohjaajien kanssa!</p>',
      },
      name: {
        fi: 'Perheperjantai leikkipuisto Etupellossa',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbmscxi/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:afufblzxqe',
      location: {
        id: 'tprek:500',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:itä-pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Itä-Pakila',
              sv: 'Östra Baggböle',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:itä-pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Itä-Pakila',
              sv: 'Östra Baggböle',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Pakila',
              sv: 'Baggböle',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.647682Z',
        custom_data: null,
        email: 'lp.etupelto@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00680',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 77,
        image: 54050,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.960117,
            60.242825,
          ],
        },
        street_address: {
          fi: 'Etupellontie 8',
          sv: 'Framåkersvägen 8',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
        },
        telephone: {
          fi: '09 310 69970',
        },
        description: {
          fi: 'Leikkipuisto Etupellossa on pelikenttä, joka talvisin jäädytetään luistelukentäksi. Leikkipuistossa on myös kahluu-allas, kiipeilytelineitä, leinut sekä leikkivälineitä, jotka tukevat liikunnallista toimintaa.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Etupelto',
          sv: 'Lekparken Etupelto',
          en: 'Playground Etupelto',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:500/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbly46m/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Government-Organization/Leikkipuisto-Etupelto-1839261636360380/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201003',
      sub_events: [],
      images: [
        {
          id: 48286,
          license: 'event_only',
          created_time: '2018-11-06T08:15:51.760622Z',
          last_modified_time: '2018-11-06T08:22:58.737850Z',
          name: '20181101_092918 (003).jpg',
          url: 'http://api.hel.fi/linkedevents/media/images/20181101_092918_003.jpg',
          cropping: '72,0,505,433',
          photographer_name: 'Leikkipuisto Etupelto',
          data_source: 'helsinki',
          publisher: 'helsinki:u42030010201003',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/48286/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p20513/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
      ],
      created_time: '2019-01-15T08:44:46.867868Z',
      last_modified_time: '2019-01-15T08:44:46.867908Z',
      date_published: null,
      start_time: '2018-11-12T07:30:00Z',
      end_time: '2019-05-27T08:30:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: null,
      short_description: {
        fi: 'Tervetuloa perheiden olohuoneeseen leikkimään ja liikkumaan! Viikottain vaihtuva tuokio sisällä tai ulkona.',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
      },
      description: {
        fi: '<p>Perheiden olohuoneeseen ovat kaikki perheet tervetulleita.  Teemat ja ohjatut tuokiot vaihtuvat viikottain ja vuodenajan mukaan. Voit lämmittää omia ruokia sekä keittää kahvia tai teetä. Tervetuloa mukaan myös suunnittelemaan toimintaa yhdessä ohjaajien kanssa!</p>',
      },
      name: {
        fi: 'Perheiden olohuone leikkipuisto Etupellossa',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufblzxqe/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:afufbly46m',
      location: {
        id: 'tprek:500',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:itä-pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Itä-Pakila',
              sv: 'Östra Baggböle',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:itä-pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Itä-Pakila',
              sv: 'Östra Baggböle',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:pakila',
            municipality: 'Helsinki',
            name: {
              fi: 'Pakila',
              sv: 'Baggböle',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.647682Z',
        custom_data: null,
        email: 'lp.etupelto@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00680',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 77,
        image: 54050,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.960117,
            60.242825,
          ],
        },
        street_address: {
          fi: 'Etupellontie 8',
          sv: 'Framåkersvägen 8',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
        },
        telephone: {
          fi: '09 310 69970',
        },
        description: {
          fi: 'Leikkipuisto Etupellossa on pelikenttä, joka talvisin jäädytetään luistelukentäksi. Leikkipuistossa on myös kahluu-allas, kiipeilytelineitä, leinut sekä leikkivälineitä, jotka tukevat liikunnallista toimintaa.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Etupelto',
          sv: 'Lekparken Etupelto',
          en: 'Playground Etupelto',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:500/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Government-Organization/Leikkipuisto-Etupelto-1839261636360380/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201003',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufblzxqe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufblzyym/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufblzz5u/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufblz3te/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufblz4tu/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufblz52i/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufblz6ym/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbl2aae/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbl2bau/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbl2b2y/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbl2cvq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbl2dqy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbl2eie/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbl2e4a/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbl2fpe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbl2gl4/?format=json',
        },
      ],
      images: [
        {
          id: 48286,
          license: 'event_only',
          created_time: '2018-11-06T08:15:51.760622Z',
          last_modified_time: '2018-11-06T08:22:58.737850Z',
          name: '20181101_092918 (003).jpg',
          url: 'http://api.hel.fi/linkedevents/media/images/20181101_092918_003.jpg',
          cropping: '72,0,505,433',
          photographer_name: 'Leikkipuisto Etupelto',
          data_source: 'helsinki',
          publisher: 'helsinki:u42030010201003',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/48286/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p20513/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
      ],
      created_time: '2019-01-15T08:44:40.060469Z',
      last_modified_time: '2019-01-15T08:44:40.060516Z',
      date_published: null,
      start_time: '2018-11-12T07:30:00Z',
      end_time: '2019-05-27T08:30:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: null,
      short_description: {
        fi: 'Tervetuloa perheiden olohuoneeseen leikkimään ja liikkumaan! Viikottain vaihtuva tuokio sisällä tai ulkona.',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-etupelto',
      },
      description: {
        fi: '<p>Perheiden olohuoneeseen ovat kaikki perheet tervetulleita.  Teemat ja ohjatut tuokiot vaihtuvat viikottain ja vuodenajan mukaan. Voit lämmittää omia ruokia sekä keittää kahvia tai teetä. Tervetuloa mukaan myös suunnittelemaan toimintaa yhdessä ohjaajien kanssa!</p>',
      },
      name: {
        fi: 'Perheiden olohuone leikkipuisto Etupellossa',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:afufbly46m/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'hkm:7877',
      location: {
        id: 'tprek:8663',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:vironniemi',
            municipality: 'Helsinki',
            name: {
              fi: 'Vironniemi',
              sv: 'Estnäs',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:kruununhaka',
            municipality: 'Helsinki',
            name: {
              fi: 'Kruununhaka',
              sv: 'Kronohagen',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:kruununhaka',
            municipality: 'Helsinki',
            name: {
              fi: 'Kruununhaka',
              sv: 'Kronohagen',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2018-10-25T05:09:28.333973Z',
        custom_data: null,
        email: null,
        contact_type: null,
        address_region: null,
        postal_code: '00170',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 327,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.954248,
            60.168613,
          ],
        },
        street_address: {
          fi: 'Aleksanterinkatu 16',
          sv: 'Alexandersgatan 16',
          en: 'Aleksanterinkatu 16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.helsinginkaupunginmuseo.fi/',
          sv: 'http://www.helsinginkaupunginmuseo.fi/sv/',
          en: 'http://www.helsinginkaupunginmuseo.fi/',
        },
        telephone: {
          fi: '09 310 36630',
        },
        description: null,
        name: {
          fi: 'Kaupunginmuseo',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:8663/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4934/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8107/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4679/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p22039/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: {
            fi: 'Aina vapaa pääsy',
            sv: 'Alltid fritt inträde',
            en: 'Always free entry',
          },
        },
      ],
      data_source: 'hkm',
      publisher: 'ahjo:u4804001020',
      sub_events: [],
      images: [
        {
          id: 51369,
          license: 'cc_by',
          created_time: '2019-01-03T07:48:52.447041Z',
          last_modified_time: '2019-01-03T07:48:52.447060Z',
          name: 'hkm-image',
          url: 'http://www.helsinginkaupunginmuseo.fi/wp-content/uploads/2019/01/kaupunginmuseo_09012017-1024x683.jpg',
          cropping: '',
          photographer_name: null,
          data_source: 'hkm',
          publisher: 'ahjo:u4804001020',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/51369/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: '2019-01-03T07:48:53.210329Z',
      last_modified_time: '2019-01-03T13:27:26.405003Z',
      date_published: null,
      start_time: '2019-01-05T21:00:00Z',
      end_time: '2019-12-28T21:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: null,
      short_description: {
        fi: 'Tervetuloa maksuttomalle yleisöopastukselle! Avoimia yleisöopastuksia järjestetään joka kuukaud…',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'http://www.helsinginkaupunginmuseo.fi/tapahtumat/yleisoopastukset-helsingin-valitut-palat-nayttelyssa-2/',
      },
      description: {
        fi: '<p>Tervetuloa maksuttomalle yleisöopastukselle! Avoimia yleisöopastuksia järjestetään joka kuukauden ensimmäinen torstai klo 17 ja sunnuntai klo 14.</p><p><strong><em>Kevään 2019 yleisöopastukset</em></strong></p><p><strong>TORSTAISIN klo 17</strong> 3.1.2019 7.2.2019 7.3.2019 4.4.2019 2.5.2019</p><p><strong>SUNNUNTAISIN klo 14</strong> 6.1.2019 3.2.2019 3.3.2019 7.4.2019 5.5.2019</p><p><a href="http://www.helsinginkaupunginmuseo.fi/opastukset/">Voit myös varata opastuksen ryhmällesi!</a></p>',
      },
      name: {
        fi: 'Yleisöopastukset Helsingin valitut palat -näyttelyssä',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/hkm:7877/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aft2pyw6iy',
      location: {
        id: 'tprek:8645',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:kampinmalmi',
            municipality: 'Helsinki',
            name: {
              fi: 'Kampinmalmi',
              sv: 'Kampmalmen',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etu-töölö',
            municipality: 'Helsinki',
            name: {
              fi: 'Etu-Töölö',
              sv: 'Främre Tölö',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:etu-töölö',
            municipality: 'Helsinki',
            name: {
              fi: 'Etu-Töölö',
              sv: 'Främre Tölö',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2018-10-25T05:09:28.279077Z',
        custom_data: null,
        email: null,
        contact_type: null,
        address_region: null,
        postal_code: '00100',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 7,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.934093,
            60.174664,
          ],
        },
        street_address: {
          fi: 'Mannerheimintie 13b',
          sv: 'Mannerheimvägen 13',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.helsinginkaupunginmuseo.fi/museot/hakasalmen-huvila/',
          sv: 'http://www.helsinginkaupunginmuseo.fi/sv/museums/villa-hagasund/',
          en: 'http://www.helsinginkaupunginmuseo.fi/museot/hakasalmen-huvila/',
        },
        telephone: {
          fi: '09 310 78519',
        },
        description: null,
        name: {
          fi: 'Hakasalmen huvila',
          sv: 'Villa Hagasund',
          en: 'Hakasalmi Villa',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:8645/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p5121/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8107/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: {
            fi: '12/10€',
            sv: '12/10€',
            en: '12/10€',
          },
          info_url: {
            fi: 'http://www.hakasalmenhuvila.fi',
            sv: 'http://www.hakasalmenhuvila.fi',
            en: 'http://www.hakasalmenhuvila.fi',
          },
          description: {
            fi: '',
            sv: '',
            en: '',
          },
        },
      ],
      data_source: 'helsinki',
      publisher: 'ytj:0586977-6',
      sub_events: [],
      images: [
        {
          id: 50853,
          license: 'event_only',
          created_time: '2018-12-13T13:51:46.040430Z',
          last_modified_time: '2018-12-13T13:51:46.040453Z',
          name: 'Suruton kaupunki – kohtauksia 1920-luvun Helsingistä',
          url: 'http://api.hel.fi/linkedevents/media/images/6cccf1dc-922b-4a37-8c6d-4b5.jpg',
          cropping: '320,0,1600,1280',
          photographer_name: 'Helsingin kaupunginmuseo (c) Maija Astikainen',
          data_source: 'helsinki',
          publisher: 'ytj:0586977-6',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/50853/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: '2018-12-13T14:05:22.386134Z',
      last_modified_time: '2018-12-13T14:05:54.354066Z',
      date_published: null,
      start_time: '2018-09-14T08:00:00Z',
      end_time: '2019-09-01T14:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Helsingin kaupunginmuseo',
        sv: 'Helsingfors stadsmuseum',
        en: 'Helsinki City Museum',
      },
      short_description: {
        fi: 'Suruton kaupunki – kohtauksia 1920-luvun Helsingistä vie virkistävälle aikamatkalle 90 vuoden taakse.',
        sv: 'Utställningen Sorglös stad – scener från 1920-talets Helsingfors tar besökaren på en uppfriskande tidsresa till 90 år tillbaka. ',
        en: 'Carefree Capital – Scenes from 1920s Helsinki will take visitors on a refreshing journey, roughly 90 years back in time.',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'http://hakasalmenhuvila.fi/nayttelyt/suruton-helsinki/',
        sv: 'http://villahagasund.fi/utstallning/den-sorglosa-staden-scener-fran-1920-talets-helsingfors/',
        en: 'http://hakasalmivilla.fi/exhibition/carefree-city-scenes-helsinki-1920s/',
      },
      description: {
        fi: '<p>Suruton kaupunki – kohtauksia 1920-luvun Helsingistä vie virkistävälle aikamatkalle 90 vuoden taakse. </p><p>Mielikuvissa 1920-luvun Helsinkiä luonnehtivat kieltolaki, jazzin jytke ja lyhyiden helmojen huiske. Kaiken uuden, iloisen ja muodikkaan alle peittyi kuitenkin menneestä muistuttavia ristiriitoja. Suruton kaupunki -näyttely kuvaa räikeää ja ylitsepursuavaa 1920-luvun Helsinkiä, jota leimasivat kiihkeä tarmo ja unelmointi. Värikäs, tunnelmallinen ja yllättävä näyttely kutsuu eläytymään aikakauden vastakohtaisiin ihanteisiin ja intohimoihin. </p><p>Se tarjoaa myös kurkistuksen 1920-luvun Helsingin miljöisiin ja kaupunkilaisten mielenmaisemiin. Toiminnallinen ja viihdyttävä näyttely houkuttelee heittäytymään historiaan kaikin aistein: matkan varrella voi taipua muodikkaisiin voimisteluliikkeisiin, kuulostella salakapakan hälinää, hypätä mykkäelokuvaan, loikoilla itämaisessa salongissa tai laittaa savikiekon gramofoniin pyörimään.</p><p>Hakasalmen huvila<br>14.9.2018-1.9.2019</p><p>Ti klo 11-19, ke-su klo 11-17<br>Sisäänpääsy 12/10€, alle 18-vuotiaat ilmaiseksi</p>',
        sv: '<p>Utställningen Sorglös stad – scener från 1920-talets Helsingfors tar besökaren på en uppfriskande tidsresa till 90 år tillbaka. </p><p>I folksjälen präglas 1920-talets Helsingfors av förbudslagen, jazzrytmer och korta kjolar. Allt det nya, glada och moderiktiga dolde dock motstridigheter som påminde om det förflutna. Utställningen Sorglös stad beskriver det skrikiga och överflödande 1920-talets Helsingfors som präglades av hetsig energi och drömmar. Den färgglada, stämningsfulla och överraskande utställningen bjuder in besökare för att leva sig in i tidsålderns motstridiga ideal och passioner. </p><p>Sorglös stad bjuder på en titt i miljöer och stadsbornas själslandskap i 1920-talets Helsingfors. Den aktiverande och underhållande utställningen lockar besökaren till att kasta sig in i historien med alla sinnen: träna moderiktiga gymnastikrörelser, höra efter stöket i en lönnkrog, hoppa med i en stumfilm, vila i en orientalisk salong och lyssna på hur en stenkaka rasslar i en grammofon.</p><p>Villa Hagasund<br>14.9.2018-1.9.2019</p><p>Ti kl 11-19, ons-sö kl 11-17<br>Inträde 12/10€, under 18 år fritt inträde</p>',
        en: '<p>Carefree Capital – Scenes from 1920s Helsinki will take visitors on a refreshing journey, roughly 90 years back in time.</p><p>The exhibition Carefree Capital illustrates the flamboyancy and exuberance of Helsinki during a time characterised by fervent energy and big dreams. The story highlights the experiences of people of the era and the many voices of a time marked by tensions. </p><p>Carefree Capital provides a glimpse into the milieus of 1920s Helsinki and the mindscapes of the city’s inhabitants. This interactive and entertaining exhibition makes you want to experience history with all of your senses: along the way, you can bend yourself into fashionable gymnastic positions, listen to the hustle and bustle of a speakeasy, jump into a silent film, lounge in an Oriental salon or play a record with a gramophone.</p><p>Villa Hakasalmi<br>14.9.2018-1.9.2019</p><p>Tue 11.00-19.00, Wed-Sun 11.00-17.00<br>Admission fee 12/10€, under 18 yrs free entry</p>',
      },
      name: {
        fi: 'Suruton kaupunki',
        sv: 'Sorglös stad',
        en: 'Carefree Capital',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aft2pyw6iy/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftzpw44dq',
      location: {
        id: 'tprek:21149',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:vironniemi',
            municipality: 'Helsinki',
            name: {
              fi: 'Vironniemi',
              sv: 'Estnäs',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:kruununhaka',
            municipality: 'Helsinki',
            name: {
              fi: 'Kruununhaka',
              sv: 'Kronohagen',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:kruununhaka',
            municipality: 'Helsinki',
            name: {
              fi: 'Kruununhaka',
              sv: 'Kronohagen',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-01-17T06:09:15.156090Z',
        custom_data: null,
        email: 'kirjaamo@arkisto.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00170',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 4,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.95272,
            60.171726,
          ],
        },
        street_address: {
          fi: 'Rauhankatu 17',
          sv: 'Fredsgatan 17',
          en: 'Rauhankatu 17',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'http://www.arkisto.fi',
          sv: 'http://www.arkisto.fi/sv/framsida',
          en: 'http://www.arkisto.fi/en/frontpage',
        },
        telephone: {
          fi: '+358 29 533 7000',
        },
        description: {
          fi: 'Valtionarkisto, nimi muutettiin 1994 Kansallisarkistoksi, siirtyi vuonna 1890 Senaatin linnasta Rauhankadun ja Snellmaninkadun kulmaan, professori C.G. Nyströmin arkistolle suunnittelemaan rakennukseen. Rakennuksen Snellmaninkadun puoleinen siipirakennus on vuodelta 1928. Vuonna 1972 valmistuneen lisärakennuksen on suunnitellut professori Olof Hansson. Päärakennuksen katonharjan kolmea naishahmoa esittävä veistosryhmä (kuvanveistäjä C.E. Sjöstrand) on otettu Kansallisarkiston sinetin ja tunnuksen kuvaksi. Vanhan tutkijasalin kattomaalaukset ja entisen sisääntulohallin seinädekoraatiot on tehnyt koristemaalari Salomo Wuorio (1890) ja luettelohuoneen suuren seinämaalauksen taitelija Tor Arne (1974). Kansallisarkisto ohjaa valtion keskushallinnon arkistotointa sekä toimii valtakunnallisena keskusvirastona ja toimialansa tutkimus- ja kehittämiskeskuksena.',
          sv: 'Statsarkivet, 1939 ändrades namnet till Riksarkivet, flyttade 1890 från Senatsborgen till hörnet av Fredsgatan och Snellmansgatan, till byggnaden som professor C.G. Nyström hade ritat för arkivet. Flygelbyggnaden som sträcker sig längs Snellmansgatan är från 1928, och tillbyggnaden som uppfördes 1972 har ritats av professor Olof Hansson. Skulpturgruppen med tre kvinnofigurer (av bildhuggaren C.E. Sjöstrand) på huvudbyggnadens takås har använts som symbol i Riksarkivets sigill och emblem. Takmålningarna i gamla forskarsalen och väggmålningarna i gamla trapphallen har målats av dekorationsmålaren Salomo Wuorio (1890) och den stora väggmålningen i förteckningsrummet av konstnären Tor Arne (1974). Riksarkivet styr arkivfunktionen hos statens centralförvaltning samt verkar som centralt ämbetsverk och som forsknings- och utvecklingscentral inom sitt område.',
          en: 'The National Archives guides the archives and records management of the central government administration and acts as a national central agency and research and development centre in its field of expertise. The oldest section of the National Archives building was designed by architect C.G. Nyström and completed in 1890. The building has since been extended. The statuary group of three women on top of the old building was sculpted by C. E. Sjöstrand (1828-1906) and symbolises Finland standing in the middle surrounded by the goddesses of historical research and writing. The oldest document on Finland preserved in the archives dates from 1316. The archives are open to the public.',
        },
        name: {
          fi: 'Kansallisarkisto',
          sv: 'Riksarkivet',
          en: 'National Archives of Finland',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:21149/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p5121/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p1780/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p5956/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'ytj:0586977-6',
      sub_events: [],
      images: [
        {
          id: 50614,
          license: 'event_only',
          created_time: '2018-12-10T11:12:34.719574Z',
          last_modified_time: '2018-12-10T11:12:34.719594Z',
          name: 'Suomen ritarikunnat 100 vuotta',
          url: 'http://api.hel.fi/linkedevents/media/images/RK-100-banneri.jpg',
          cropping: '576,0,1344,768',
          photographer_name: 'Kansallisarkisto / Viestintä',
          data_source: 'helsinki',
          publisher: 'ytj:0586977-6',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/50614/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [],
      audience: [],
      created_time: '2018-12-10T11:23:31.234879Z',
      last_modified_time: '2018-12-10T11:23:31.234902Z',
      date_published: null,
      start_time: '2018-12-04T08:00:00Z',
      end_time: '2019-12-20T13:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Kansallisarkisto',
        sv: 'Riksarkivet',
        en: 'National Archives of Finland',
      },
      short_description: {
        fi: 'Suomen ritarikunnat 100 vuotta -näyttely esittelee valtiollisten ritarikuntien historiaa ja nykyisyyttä. ',
        sv: 'Finlands ordnar 100 år -utställningen presenterar statsordnarnas historia och nutid.',
        en: 'The Finnish orders of merit: 100 years exhibition showcases the history and current state of Finnish Orders. ',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'https://www.arkisto.fi/nayttelyt',
        sv: 'https://www.arkisto.fi/sv/utstallningar-2',
        en: 'https://www.arkisto.fi/news/2239/61/Exhibition-Finnish-orders-of-merit-100-years-4.12.2018-20.12.2019/d,ajankohtaista',
      },
      description: {
        fi: '<p>Suomen ritarikunnat 100 vuotta -näyttely esittelee valtiollisten ritarikuntien historiaa ja nykyisyyttä. Sen tavoitteena on kertoa yleistajuisesti kunniamerkkikäytännöistä Suomessa. </p><p>Näyttely järjestetään Vapaudenristin ritarikunnan ja Suomen Valkoisen Ruusun ritarikunnan satavuotisjuhlien kunniaksi.</p><p>Näyttelyssä kuvataan monipuolisen aineiston ja esineistön avulla, miten Suomen ritarikuntalaitos muotoutui vuosina 1918–1919 ja kuinka valtiollinen palkitseminen on elänyt ajassaan.</p><p>Kansallisarkisto<br>4.12.2018–20.12.2019</p><p>Ti, to-pe klo 10-15, ke klo 12-18 <br>(19.12.2018 10–16)</p><p>Vapaa pääsy</p>',
        sv: '<p>Finlands ordnar 100 år -utställningen presenterar statsordnarnas historia och nutid. Målet med utställningen är att lättillgängligt presentera användningen av utmärkelsetecken i Finland. </p><p>Utställningen ordnas med anledning av hundraårsjubileet för Frihetskorsets orden och Finlands Vita Ros’ orden.</p><p>Genom ett mångsidigt material beskriver utställningen hur Finlands ordensväsen utformades 1918–1919 och hur det statliga ordensväsendet har levt i tiden.</p><p>Riksarkivet<br>4.12.2018–20.12.2019</p><p>Ti, to-fre kl 10–15, ons kl 12–18<br>(19.12.2018 kl 10–16)</p><p>Fritt inträde</p>',
        en: '<p>The Finnish orders of merit: 100 years exhibition showcases the history and current state of Finnish Orders. </p><p>This exhibition sheds light on Finland’s honours system in an approachable manner, and it celebrates the 100th anniversary of the Order of the Cross of Liberty and the Order of the White Rose of Finland. </p><p>The diverse collection of objects and other material tells the story of how the Finnish Orders were established in 1918–1919 and how the state honours system has changed with the times.</p><p>National Archives of Finland</p><p>4.12.2018–20.12.2019</p><p>Tue, Thu-Fri 10.00-15.00, Wed 12.00-18.00<br>(19.12.2018 10.00–16.00)</p><p>Free entry</p>',
      },
      name: {
        fi: 'Suomen ritarikunnat 100 vuotta',
        sv: 'Finlands ordnar 100 år',
        en: 'Finnish Orders Of Merit: 100 Years ',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzpw44dq/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftzo4vv24',
      location: {
        id: 'tprek:177',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:laajasalo',
            municipality: 'Helsinki',
            name: {
              fi: 'Laajasalo',
              sv: 'Degerö',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:santahamina',
            municipality: 'Helsinki',
            name: {
              fi: 'Santahamina',
              sv: 'Sandhamn',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:santahamina',
            municipality: 'Helsinki',
            name: {
              fi: 'Santahamina',
              sv: 'Sandhamn',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T11:09:15.621196Z',
        custom_data: null,
        email: 'lp.santahamina@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00860',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 157,
        image: 54076,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            25.049177,
            60.15239,
          ],
        },
        street_address: {
          fi: 'Kadettikouluntie 5',
          sv: 'Kadettskolevägen 5',
          en: 'Kadettikouluntie 5',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/varhaiskasvatus/fi/leikkipuistotjaperhetalot/sanatahamina/santahamina',
          sv: 'https://www.hel.fi/varhaiskasvatus/fi/leikkipuistotjaperhetalot/sanatahamina/santahamina',
          en: 'https://www.hel.fi/varhaiskasvatus/fi/leikkipuistotjaperhetalot/sanatahamina/santahamina',
        },
        telephone: {
          fi: '09 310 56450',
        },
        description: {
          fi: 'Santahaminassa on pelikaukalo, koristeline, keinut ja ritari Tuomon linna, jotka tukevat liikunnallista toimintaa. Leikkipuistot tarjoavat liikunta- ja pelimahdollisuuksia.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Santahamina',
          sv: 'Lekparken Santahamina',
          en: 'Playground Santahamina',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:177/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p916/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p5201/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/LeikkipuistoSantahamina/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201006',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wr7e/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wske/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wsv4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wtbe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wtna/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wty4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wud4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wupy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wu3a/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wvhe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wvvy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wwem/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wwqe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4ww2y/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wxhe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wxsa/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wx4q/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4wyka/?format=json',
        },
      ],
      images: [
        {
          id: 47107,
          license: 'event_only',
          created_time: '2018-09-12T09:46:03.212382Z',
          last_modified_time: '2018-09-12T09:46:03.212415Z',
          name: 'IMG_0333.JPG',
          url: 'http://api.hel.fi/linkedevents/media/images/IMG_0333.JPG',
          cropping: '114,0,786,672',
          photographer_name: '',
          data_source: 'helsinki',
          publisher: 'helsinki:u42030010201006',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/47107/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-12-10T09:28:56.543002Z',
      last_modified_time: '2018-12-10T09:28:56.543027Z',
      date_published: null,
      start_time: '2018-12-19T08:30:16.811000Z',
      end_time: '2019-05-22T08:00:39.277000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: null,
      short_description: {
        fi: 'Leikkejä ja liikuntaa kaikenikäisille ulkona.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto Santahamina sijaitsee puolustusvoimien saarella, johon tarvitaan kulkulupa ja tulijan tulee olla Suomen kansalainen. Lisätiedot 09 310 56450.',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-santahamina/',
      },
      description: {
        fi: '<p>Leikkejä ja liikuntaa kaikenikäisille ulkona, sekä retkiä lähiympäristöön. Retkillä tutustumme mm. Santahaminan upeaan luontoon.</p><p>Tule mukaan kehittelemään lapsesi kanssa leikki-ideoita yhdessä ohjaajien kanssa. Lapset löytävät leikkiseuraa ja leikin lomassa vanhemmat voivat tutustua muihin lapsiperheisiin. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p><p>Leikkipuisto Santahamina sijaitsee puolustusvoimien saarella, johon tarvitaan kulkulupa ja tulijan tulee olla Suomen kansalainen. <br>Saat kulkuluvan soittamalla (09 310 56450) leikkipuistoon kaksi päivää ennen tuloasi.<br></p>',
      },
      name: {
        fi: 'Ohjattuja pihaleikkejä',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzo4vv24/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftzoz5l7q',
      location: {
        id: 'tprek:177',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:laajasalo',
            municipality: 'Helsinki',
            name: {
              fi: 'Laajasalo',
              sv: 'Degerö',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:santahamina',
            municipality: 'Helsinki',
            name: {
              fi: 'Santahamina',
              sv: 'Sandhamn',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:santahamina',
            municipality: 'Helsinki',
            name: {
              fi: 'Santahamina',
              sv: 'Sandhamn',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T11:09:15.621196Z',
        custom_data: null,
        email: 'lp.santahamina@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00860',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 157,
        image: 54076,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            25.049177,
            60.15239,
          ],
        },
        street_address: {
          fi: 'Kadettikouluntie 5',
          sv: 'Kadettskolevägen 5',
          en: 'Kadettikouluntie 5',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/varhaiskasvatus/fi/leikkipuistotjaperhetalot/sanatahamina/santahamina',
          sv: 'https://www.hel.fi/varhaiskasvatus/fi/leikkipuistotjaperhetalot/sanatahamina/santahamina',
          en: 'https://www.hel.fi/varhaiskasvatus/fi/leikkipuistotjaperhetalot/sanatahamina/santahamina',
        },
        telephone: {
          fi: '09 310 56450',
        },
        description: {
          fi: 'Santahaminassa on pelikaukalo, koristeline, keinut ja ritari Tuomon linna, jotka tukevat liikunnallista toimintaa. Leikkipuistot tarjoavat liikunta- ja pelimahdollisuuksia.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Santahamina',
          sv: 'Lekparken Santahamina',
          en: 'Playground Santahamina',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:177/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/LeikkipuistoSantahamina/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201006',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6hzm/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6ika/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6i4e/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6jle/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6jyi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6kiu/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6k7m/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6lpe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6l7y/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6mru/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6nbi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6nwi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6oji/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6o5i/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6ptu/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6qma/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6q2y/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz6rme/?format=json',
        },
      ],
      images: [
        {
          id: 47098,
          license: 'event_only',
          created_time: '2018-09-12T07:57:28.702688Z',
          last_modified_time: '2018-09-12T07:57:28.702715Z',
          name: 'IMG_1827.jpg',
          url: 'http://api.hel.fi/linkedevents/media/images/IMG_1827.jpg',
          cropping: '62,0,578,516',
          photographer_name: '',
          data_source: 'helsinki',
          publisher: 'helsinki:u42030010201006',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/47098/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-12-10T09:16:53.139108Z',
      last_modified_time: '2018-12-10T09:16:53.139132Z',
      date_published: null,
      start_time: '2018-12-17T08:30:00Z',
      end_time: '2019-05-20T08:30:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: null,
      short_description: {
        fi: 'Laitetaan yhdessä luovuus lentoon; maalaten, muovaillen, leikaten, liimaten.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto Santahamina sijaitsee puolustusvoimien saarella, johon tarvitaan kulkulupa ja tulijan tulee olla Suomen kansalainen. Lisätiedot 09 310 56450. ',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-santahamina/',
      },
      description: {
        fi: '<p>Laitetaan yhdessä luovuus lentoon; maalaten, muovaillen, leikaten, liimaten. </p><p>Leikkipuiston Luovuus lentoon -hetkeen ovat kaikki tervetulleita, se sopii kaikenikäisille! <br>Luovuus lentoon -hetkessä kokeillaan monipuolisia taiteilu- ja askartelupuuhia vaihtuvilla teemoilla.</p><p>Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p><p>Leikkipuisto Santahamina sijaitsee puolustusvoimien saarella, johon tarvitaan kulkulupa ja tulijan tulee olla Suomen kansalainen. <br>Saat kulkuluvan soittamalla (09 310 56450) leikkipuistoon kaksi päivää ennen tuloasi. </p>',
      },
      name: {
        fi: 'Luovuus Lentoon!',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzoz5l7q/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftzox6cca',
      location: {
        id: 'tprek:177',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:laajasalo',
            municipality: 'Helsinki',
            name: {
              fi: 'Laajasalo',
              sv: 'Degerö',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:santahamina',
            municipality: 'Helsinki',
            name: {
              fi: 'Santahamina',
              sv: 'Sandhamn',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:santahamina',
            municipality: 'Helsinki',
            name: {
              fi: 'Santahamina',
              sv: 'Sandhamn',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T11:09:15.621196Z',
        custom_data: null,
        email: 'lp.santahamina@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00860',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 157,
        image: 54076,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            25.049177,
            60.15239,
          ],
        },
        street_address: {
          fi: 'Kadettikouluntie 5',
          sv: 'Kadettskolevägen 5',
          en: 'Kadettikouluntie 5',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/varhaiskasvatus/fi/leikkipuistotjaperhetalot/sanatahamina/santahamina',
          sv: 'https://www.hel.fi/varhaiskasvatus/fi/leikkipuistotjaperhetalot/sanatahamina/santahamina',
          en: 'https://www.hel.fi/varhaiskasvatus/fi/leikkipuistotjaperhetalot/sanatahamina/santahamina',
        },
        telephone: {
          fi: '09 310 56450',
        },
        description: {
          fi: 'Santahaminassa on pelikaukalo, koristeline, keinut ja ritari Tuomon linna, jotka tukevat liikunnallista toimintaa. Leikkipuistot tarjoavat liikunta- ja pelimahdollisuuksia.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Santahamina',
          sv: 'Lekparken Santahamina',
          en: 'Playground Santahamina',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:177/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p20513/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/LeikkipuistoSantahamina/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201006',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox67h4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox67sy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox674y/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7ah4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7aue/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7a6u/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7bjq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7bvm/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7cbq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7coe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7cz4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7deq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7dpq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7d2i/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7eeq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7eoy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7e2u/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7fhu/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox7fuu/?format=json',
        },
      ],
      images: [
        {
          id: 47106,
          license: 'event_only',
          created_time: '2018-09-12T09:31:45.072111Z',
          last_modified_time: '2018-09-12T09:31:45.072132Z',
          name: 'IMG_20180607_132238.png',
          url: 'http://api.hel.fi/linkedevents/media/images/IMG_20180607_132238.png',
          cropping: '0,40,249,290',
          photographer_name: '',
          data_source: 'helsinki',
          publisher: 'helsinki:u42030010201006',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/47106/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-12-10T09:08:14.487996Z',
      last_modified_time: '2018-12-10T09:08:14.488019Z',
      date_published: null,
      start_time: '2018-12-18T07:30:00Z',
      end_time: '2019-05-21T08:30:18.527000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: null,
      short_description: {
        fi: 'Tervetuloa kaikki vauva-taaperoarkea elävät, sekä uutta perheenjäsentä odottavat juttelemaan ja tapaamaan muita samassa elämäntilanteessa olevia.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto Santahamina sijaitsee puolustusvoimien saarella, johon tarvitaan kulkulupa ja tulijan tulee olla Suomen kansalainen. Lisätiedot 09 310 56450.',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-santahamina/',
      },
      description: {
        fi: '<p>Tervetuloa kaikki vauva-taaperoarkea elävät, sekä uutta perheenjäsentä odottavat juttelemaan ja tapaamaan muita samassa elämäntilanteessa olevia. Vauva-taaperoaamuun ovat aikki tervetulleita, se sopii kaikenikäisille!</p><p>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p><p>Leikkipuisto Santahamina sijaitsee puolustusvoimien saarella, johon tarvitaan kulkulupa ja tulijan tulee olla Suomen kansalainen. <br>Saat kulkuluvan soittamalla (09 310 56450) leikkipuistoon kaksi päivää ennen tuloasi.<br></p>',
      },
      name: {
        fi: 'Vauva-taaperoaamu',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftzox6cca/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftx27cuse',
      location: {
        id: 'tprek:45927',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:myllypuro',
            municipality: 'Helsinki',
            name: {
              fi: 'Myllypuro',
              sv: 'Kvarnbäcken',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:myllypuro',
            municipality: 'Helsinki',
            name: {
              fi: 'Myllypuro',
              sv: 'Kvarnbäcken',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:vartiokylä',
            municipality: 'Helsinki',
            name: {
              fi: 'Vartiokylä',
              sv: 'Botby',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-01-16T11:10:13.973629Z',
        custom_data: null,
        email: null,
        contact_type: null,
        address_region: null,
        postal_code: '00920',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 64,
        image: null,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            25.07838,
            60.224598,
          ],
        },
        street_address: {
          fi: 'Jauhokuja 3',
          sv: 'Mjölgränden 3',
          en: 'Jauhokuja 3',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: null,
        telephone: null,
        description: {
          fi: 'Hinnat Aikuiset - kertamaksu 3,50 e - 10 kerran sarjakortti tai kuukausikortti 28 e - kausikortti 84 e Muut - kertamaksu 2 e - 10 kerran sarjakortti tai kuukausikortti 16 e - kausikortti 48 e Lapset\n- kertamaksu 1,50 e - 10 kerran sarjakortti tai kuukausikortti 12 e - kausikortti 36 e - henkilökohtainen asiakaskortti (kausi-, kuukausi ja sarjaliput) 4 e Liikuntamylly palvelee monipuolisesti pääkaupunkiseudun kuntoliikuntaa ja huippu-urheilua ja on yksi yleisurheilun valtakunnallisista harjoittelukeskuksista. Säännöllistä kilpailutoimintaa järjestetään yleisurheilussa, voimistelussa ja salibandyssä. Liikuntamyllyssä on liikunnalle tarkoitettuja tiloja yhteensä 12 060 neliömetriä. Lajit: Budolajit, itsepuolustuslajit, kiipeily, koripallo, kuntosali, lentopallo, paini, pöytätennis, salibandy, sähly, sulkapallo, tanssi, voimistelu, telinevoimistelu, yleisurheilu. Palvelut: Liikuntamyllyn parkki alkaen 50 senttiä/h, juoma- ja välipala-automaatteja oleskelutiloissa, naisten ja miesten pukuhuoneet ja suihkutilat, 1 ryhmäpukuhuone, säilytyskaapit omalla lukolla, lukkoja voi ostaa kassalta 4 e, kokoustilat; varaukset puh. 09 310 87800 tai liikuntapaikkavaraukset@hel.fi, ilmainen langaton verkko. Muuta: Tiloissa on pääsääntöisesti varaamatonta käyttöä. Iltaisin ja viikonloppuisin tilat ovat pääsääntöisesti urheiluseurojen käytössä.',
          sv: 'Priser Vuxna - engångsavgift 3,50 e - 10 gångers seriekort eller månadskort 28 e - säsongkort 4 mån. 84 e Andra - engångsavgift 2 e - 10 gångers seriekort eller månadskort 16 e - säsongkort 4 mån. 48 e Barn (7 - 17 år)\n- engångsavgift 1,50 e - 10 gångers seriekort eller månadskort 12 e - säsongkort 4 mån.36 e - personell kundkortet (10 gångers seriekort, månadskort och säsongkort) 4 e Sportkvarnen är ett mångsidigt idrottscenter som betjänar motion och toppidrott i huvudstadsregionen. Anläggningen hör till de nationella träningscentren för friidrott. Här ordnas regelbundet tävlingar i friidrott, gymnastik och innebandy. Totalt 12 060 m² är avsedda för motion och idrott i Sportkvarnen. Grenar: Gym, budosal, självrenandesorter, basketboll, volleyboll, brottning, bordtennis, innebandy, rinkbandy, badminton, dans, gymnastik, klättring, redskapsgymnastik, friidrott. Tjänster: I vistelserummen automater för drycker och snacks, egna duschar och omklädningsrum för kvinnor och män, 1 gruppomklädningsrum, förvaringsskåp; eget lås, möteslokal för 30 personer och för 50 personer, och beställningsbastu, simbassäng, reservering tfn 09 310 87535, 09 310 87533. Övrigt: Om dagarna används lokalerna av traktens skolor och idrottsverkets förstadsmotion. Enligt huvudregeln bokas lokalerna inte. Om kvällarna och veckosluten utnyttjas lokalerna mest av idrottsföreningar.',
          en: 'Charges Adults - one visit €3.50 - 10 visits or 1 month €28 - season card €84 Others - one visit €2 - 10 visits or 1 month €16 - season card €48 Children\n- one visit €1.50 - 10 visits or 1 month €12 - season card €36 - personal customer card (10 visits, 1 month or season card) €4 Liikuntamylly serves the Helsinki Metropolitan Area\'s fitness training and world-class sports in a variety of ways, and is one of the Finnish Athletics Federation\'s national training centres. Regular competition activities are held in athletics, gymnastics and floorball. Liikuntamylly features a total of 12,060 m2 of space intended for sports use. Sport events: Budo sports, self-defence sports, climbing, basketball, gym, volleyball, wrestling, table-tennis, floorball, badminton, dance, gymnastics, apparatus gymnastics, athletics. Services: Drink and snack machines in lounges, women\'s and men\'s dressing rooms and showers, 1 group dressing room, lockers, deposit of own lock, meeting rooms, reservations, tel. 09 310 87535, 09 310 87533. Other info: Facilities generally do not have to be booked. In the evenings and on weekends the facilities are mainly used by sports clubs.',
        },
        name: {
          fi: 'Liikuntamylly',
          sv: 'Sportkvarnen',
          en: 'Liikuntamylly',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:45927/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: {
            fi: '3,50',
          },
          info_url: {
            fi: '',
          },
          description: {
            fi: 'Hinta: Liikuntapaikan sisäänpääsymaksu (aik. 3,50e/lapset 1,50e/muut 2e)',
          },
        },
      ],
      data_source: 'helsinki',
      publisher: 'ahjo:u48040020',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftx27cx2u/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftx27cyeq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftx27cyna/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftx27cyv4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftx27cy7i/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftx27czj4/?format=json',
        },
      ],
      images: [
        {
          id: 50558,
          license: 'cc_by',
          created_time: '2018-12-05T08:03:06.483258Z',
          last_modified_time: '2018-12-05T08:03:06.483296Z',
          name: 'joulujumpat_web.jpg',
          url: 'http://api.hel.fi/linkedevents/media/images/joulujumpat_web.jpg',
          cropping: '100,0,500,400',
          photographer_name: '',
          data_source: 'helsinki',
          publisher: 'ahjo:u48040020',
          '@id': 'http://api.hel.fi/linkedevents/v1/image/50558/?format=json',
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
        },
      ],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [],
      created_time: '2018-12-05T08:29:19.383336Z',
      last_modified_time: '2018-12-05T08:29:19.383374Z',
      date_published: null,
      start_time: '2018-12-19T08:00:00Z',
      end_time: '2020-01-03T15:20:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: null,
      short_description: {
        fi: 'Ennen joulua, välipäivinä ja ensi vuoden alussa jumpataan Liikuntamyllyssä',
      },
      provider_contact_info: null,
      location_extra_info: null,
      info_url: {
        fi: 'https://www.hel.fi/uutiset/fi/kulttuurin-ja-vapaa-ajan-toimiala/joulujumppia-ympari-helsinkia?pd=v',
      },
      description: {
        fi: '<p>Joulujumpat ovat monipuolista perusjumppaa, eikä niihin ei ole ennakkoilmoittautumisia.</p><p>keskiviikko 19.12. joulujumppa klo 10.00–10.50<br>torstai 20.12. joulujumppa klo 16.30–17.20<br>torstai 27.12. välipäiväjumppa klo 10.00–10.50 ja välipäivävenyttely klo 11.00–11.50<br>keskiviikko 2.1. uudenvuodenjumppa klo 10.00–10.50<br>torstai 3.1. uudenvuodenjumppa klo 16.30–17.20</p><p>Hinta: Liikuntapaikan sisäänpääsymaksu (aik. 3,50e/lapset 1,50e/muut 2e)</p>',
      },
      name: {
        fi: 'Joulujumppia Liikuntamyllyssä',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftx27cuse/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'espoo:144083',
      location: {
        id: 'espoo:23',
        divisions: [],
        created_time: null,
        last_modified_time: '2018-04-26T15:18:43.346804Z',
        custom_data: null,
        email: null,
        contact_type: null,
        address_region: null,
        postal_code: '',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 94,
        image: null,
        data_source: 'espoo',
        publisher: 'espoo:kaupunki',
        parent: null,
        replaced_by: null,
        position: null,
        street_address: {
          fi: 'Järvenperäntie 1-3',
        },
        address_locality: {
          fi: '',
        },
        info_url: {
          fi: 'http://lastenkulttuurikeskusaurora.fi',
          sv: '',
          en: '',
        },
        telephone: null,
        description: null,
        name: {
          fi: 'Lasten kulttuurikeskus Aurora, Tilanhoitajantalo',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/espoo:23/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p7642/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8090/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2434/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2901/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [],
      offers: [
        {
          is_free: false,
          price: {
            fi: 'Maksuton',
          },
          info_url: null,
          description: null,
        },
      ],
      data_source: 'espoo',
      publisher: 'espoo:kaupunki',
      sub_events: [],
      images: [],
      in_language: [],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p2434/?format=json',
        },
      ],
      created_time: '2018-07-10T14:21:15.993252Z',
      last_modified_time: '2018-11-30T10:14:01.507186Z',
      date_published: '2018-07-10T12:45:00Z',
      start_time: '2018-08-30T14:30:00Z',
      end_time: '2019-05-23T17:30:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Lasten kulttuurikeskus Aurora',
      },
      short_description: {
        fi: 'Aikuisten yhteistä käsillä tekemisen aikaa!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Lasten kulttuurikeskus Aurora, Tilanhoitajantalo',
      },
      info_url: {
        fi: 'http://lastenkulttuurikeskusaurora.fi',
      },
      description: {
        fi: '<p>Aikuisten käsityöklubi Tilda kokoontuu torstaisin klo 17.30-20.30. Aurorassa. (Ei pyhäpäivinä)<br>\nSyyskauden viimeinen kerta on to 20.12. ja jatkuu jälleen 3.1.19.</p><p>Tilda käsityöklubilla tehdään omia projekteja yhdessä, vertaisvoimin pehmeistä materiaaleista. Tee vaikkapa ihania vaatteita ja ostoskasseja tai nalleja ja nukkeja lapsille. Klubi on avoin kaikelle kokeilemiselle, joten mitään osallistumiskynnystä ei ole.<br><br>\nPaikanpäällä ompelukone, saumuri, käsityö- ja askartelukirjoja ideoinnin avuksi, sekä vaihtelevasti erilaisia materiaaleja. Tuo ihmeessä lisää omia ja mieleisiä tarvikkeita töitäsi varten. <br><br>\nKaikenikäiset aikuiset nuoresta senioriin ovat tervetulleita. Tildaan ei tarivise ilmoittautua ja voit osallistua niihin kertoihin kun sinulle sopii. Tapahtuma on asukkaiden kanssa yhdessä tehty. Vapaa pääsy.</p><p> <br>\nLasten kulttuurikeskus Aurora, Tilanhoitajantalo (pihapiirin keskimmäinen rakennus)<br><br><br>\nSaapuminen: Auroran parkkipaikka on siirtynyt kadun toiselle puolelle osoitteeseen Träskändanristi 4. (Entinen Aurorankodin parkkipaikka).<br><a href="https://www.facebook.com/hashtag/yhdess%C3%A4tehty">#yhdessätehty</a> <a href="https://www.facebook.com/hashtag/uusiaurora">#uusiaurora</a> <a href="https://www.facebook.com/hashtag/k%C3%A4sitity%C3%B6t">#käsitityöt</a> <a href="https://www.facebook.com/hashtag/diy">#DIY</a></p><p> </p>',
      },
      name: {
        fi: 'Tilda käsityöklubi aikuisille',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/espoo:144083/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxr647q',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr55f4/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:09:02.342828Z',
      last_modified_time: '2018-11-16T09:09:02.342855Z',
      date_published: null,
      start_time: '2018-11-30T08:30:47.469000Z',
      end_time: '2019-05-03T07:45:47.469000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Musavartti',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr647q/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxr6vbq',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr55f4/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:09:00.309298Z',
      last_modified_time: '2018-11-16T09:09:00.309323Z',
      date_published: null,
      start_time: '2018-12-21T08:30:47.483000Z',
      end_time: '2019-05-24T07:45:47.483000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Musavartti',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6vbq/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxr6uvm',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr55f4/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:09:00.213438Z',
      last_modified_time: '2018-11-16T09:09:00.213463Z',
      date_published: null,
      start_time: '2018-12-14T08:30:47.477000Z',
      end_time: '2019-05-17T07:45:47.477000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Musavartti',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6uvm/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxr6uhi',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr55f4/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:09:00.103614Z',
      last_modified_time: '2018-11-16T09:09:00.103651Z',
      date_published: null,
      start_time: '2018-12-07T08:30:47.472000Z',
      end_time: '2019-05-10T07:45:47.472000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Musavartti',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6uhi/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxr6t2u',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr55f4/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:08:59.997496Z',
      last_modified_time: '2018-11-16T09:08:59.997519Z',
      date_published: null,
      start_time: '2018-11-23T08:30:00Z',
      end_time: '2019-04-26T07:45:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Musavartti',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6t2u/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxr55f4',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6t2u/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6uhi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6uvm/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6vbq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6vna/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6vxm/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6wce/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6wom/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6wzu/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6xie/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6xue/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6x5q/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6yoe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6y4y/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr6zp4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr62ci/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr62zq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr63ue/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr64oa/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr647q/?format=json',
        },
      ],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:08:54.197734Z',
      last_modified_time: '2018-11-16T09:08:54.197758Z',
      date_published: null,
      start_time: '2018-11-23T08:30:00Z',
      end_time: '2019-09-27T07:45:47.526000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuiston musavarttiin ovat kaikki tervetulleita! Lauletaan ja musisoidaan – rytmi tarttuu varpaisiin ja sormiin.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Musavartti',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxr55f4/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxqh7gm',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhbxy/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:01:32.347357Z',
      last_modified_time: '2018-11-16T09:01:32.347382Z',
      date_published: null,
      start_time: '2018-11-29T08:30:04.805000Z',
      end_time: '2019-05-02T07:45:04.805000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Tervetuloa leikkimään, laulamaan, loruilemaan, liikkumaan ja taiteilemaan leikkipuiston toiminta tostaihin!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Tervetuloa leikkimään, laulamaan, loruilemaan, liikkumaan ja taiteilemaan leikkipuistoon vaihtuvalla teemalla! <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Toiminta torstai',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh7gm/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxqhzy4',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhbxy/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:01:30.961378Z',
      last_modified_time: '2018-11-16T09:01:30.961402Z',
      date_published: null,
      start_time: '2018-12-20T08:30:04.836000Z',
      end_time: '2019-05-23T07:45:04.836000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Tervetuloa leikkimään, laulamaan, loruilemaan, liikkumaan ja taiteilemaan leikkipuiston toiminta tostaihin!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Tervetuloa leikkimään, laulamaan, loruilemaan, liikkumaan ja taiteilemaan leikkipuistoon vaihtuvalla teemalla! <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Toiminta torstai',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhzy4/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxqhzoi',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhbxy/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:01:30.878019Z',
      last_modified_time: '2018-11-16T09:01:30.878044Z',
      date_published: null,
      start_time: '2018-12-13T08:30:04.810000Z',
      end_time: '2019-05-16T07:45:04.810000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Tervetuloa leikkimään, laulamaan, loruilemaan, liikkumaan ja taiteilemaan leikkipuiston toiminta tostaihin!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Tervetuloa leikkimään, laulamaan, loruilemaan, liikkumaan ja taiteilemaan leikkipuistoon vaihtuvalla teemalla! <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Toiminta torstai',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhzoi/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxqhzdi',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhbxy/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:01:30.788551Z',
      last_modified_time: '2018-11-16T09:01:30.788600Z',
      date_published: null,
      start_time: '2018-11-22T08:30:00Z',
      end_time: '2019-04-25T07:45:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Tervetuloa leikkimään, laulamaan, loruilemaan, liikkumaan ja taiteilemaan leikkipuiston toiminta tostaihin!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Tervetuloa leikkimään, laulamaan, loruilemaan, liikkumaan ja taiteilemaan leikkipuistoon vaihtuvalla teemalla! <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Toiminta torstai',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhzdi/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxqhbxy',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhzdi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhzoi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhzy4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh2fm/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh2qe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh24i/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh3fy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh3pi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh3y4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh4cq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh4oe/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh4ze/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh5ey/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh5ou/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh5zq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh6ca/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh6km/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh6ta/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh64u/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqh7gm/?format=json',
        },
      ],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T09:01:24.804508Z',
      last_modified_time: '2018-11-16T09:01:24.804531Z',
      date_published: null,
      start_time: '2018-11-22T08:30:00Z',
      end_time: '2019-09-26T07:45:04.875000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: {
        fi: 'Leikkipuisto isonneva',
      },
      short_description: {
        fi: 'Tervetuloa leikkimään, laulamaan, loruilemaan, liikkumaan ja taiteilemaan leikkipuiston toiminta tostaihin!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Tervetuloa leikkimään, laulamaan, loruilemaan, liikkumaan ja taiteilemaan leikkipuistoon vaihtuvalla teemalla! <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.</p>',
      },
      name: {
        fi: 'Toiminta torstai',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxqhbxy/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxovy5u',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxouztq/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:54:41.141056Z',
      last_modified_time: '2018-11-16T08:54:41.141079Z',
      date_published: null,
      start_time: '2018-11-28T08:30:01.282000Z',
      end_time: '2019-05-01T07:45:01.282000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Tervetuloa satuilemaan ja riimittelemään leikkipuistoon!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuistossa satuillaan ja riimitellään yhdessä! Kaikki ovat tervetulleita, se sopii kaikenikäisille! Satuilu ja riimittely hetkessä luetaan yhdessä jokin kirja tai luetaan lorutellaan yhdessä.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Satuilua ja Riimittelyä',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovy5u/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxovs7e',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxouztq/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:54:39.618991Z',
      last_modified_time: '2018-11-16T08:54:39.619028Z',
      date_published: null,
      start_time: '2018-12-19T08:30:01.289000Z',
      end_time: '2019-05-22T07:45:01.289000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Tervetuloa satuilemaan ja riimittelemään leikkipuistoon!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuistossa satuillaan ja riimitellään yhdessä! Kaikki ovat tervetulleita, se sopii kaikenikäisille! Satuilu ja riimittely hetkessä luetaan yhdessä jokin kirja tai luetaan lorutellaan yhdessä.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Satuilua ja Riimittelyä',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovs7e/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxovsrm',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxouztq/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:54:39.507151Z',
      last_modified_time: '2018-11-16T08:54:39.507185Z',
      date_published: null,
      start_time: '2018-12-12T08:30:01.286000Z',
      end_time: '2019-05-15T07:45:01.286000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Tervetuloa satuilemaan ja riimittelemään leikkipuistoon!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuistossa satuillaan ja riimitellään yhdessä! Kaikki ovat tervetulleita, se sopii kaikenikäisille! Satuilu ja riimittely hetkessä luetaan yhdessä jokin kirja tai luetaan lorutellaan yhdessä.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Satuilua ja Riimittelyä',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovsrm/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxovsdy',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxouztq/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:54:39.400861Z',
      last_modified_time: '2018-11-16T08:54:39.400901Z',
      date_published: null,
      start_time: '2018-12-05T08:30:01.284000Z',
      end_time: '2019-05-08T07:45:01.284000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Tervetuloa satuilemaan ja riimittelemään leikkipuistoon!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuistossa satuillaan ja riimitellään yhdessä! Kaikki ovat tervetulleita, se sopii kaikenikäisille! Satuilu ja riimittely hetkessä luetaan yhdessä jokin kirja tai luetaan lorutellaan yhdessä.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Satuilua ja Riimittelyä',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovsdy/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxovrxy',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxouztq/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:54:39.304542Z',
      last_modified_time: '2018-11-16T08:54:39.304580Z',
      date_published: null,
      start_time: '2018-11-21T08:30:00Z',
      end_time: '2019-04-24T07:45:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Tervetuloa satuilemaan ja riimittelemään leikkipuistoon!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuistossa satuillaan ja riimitellään yhdessä! Kaikki ovat tervetulleita, se sopii kaikenikäisille! Satuilu ja riimittely hetkessä luetaan yhdessä jokin kirja tai luetaan lorutellaan yhdessä.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Satuilua ja Riimittelyä',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovrxy/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxouztq',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovrxy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovsdy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovsrm/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovs7e/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovtma/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovt4e/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovuii/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovuru/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovu3i/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovvhy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovvrq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovv4i/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovwfy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovwqm/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovw2a/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovxfu/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovxqa/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovx5i/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovyia/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovysq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxovy5u/?format=json',
        },
      ],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:54:33.122666Z',
      last_modified_time: '2018-11-16T08:54:33.122688Z',
      date_published: null,
      start_time: '2018-11-21T08:30:00Z',
      end_time: '2019-09-25T07:45:01.353000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Tervetuloa satuilemaan ja riimittelemään leikkipuistoon!',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuistossa satuillaan ja riimitellään yhdessä! Kaikki ovat tervetulleita, se sopii kaikenikäisille! Satuilu ja riimittely hetkessä luetaan yhdessä jokin kirja tai luetaan lorutellaan yhdessä.<br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Satuilua ja Riimittelyä',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxouztq/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxlyk5y',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlxj6y/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:41:55.707854Z',
      last_modified_time: '2018-11-16T08:41:55.707879Z',
      date_published: null,
      start_time: '2018-11-27T08:30:00Z',
      end_time: '2019-04-30T08:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Luovuus lentoon! Tervetuloa tailemaan ja askartelemaan monipuolisesti vaihtuvilla teemoilla. Paja sopii kaikenikäisille.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Luovuus lentoon -hetkeen ovat kaikki tervetulleita, se sopii kaikenikäisille! Kokeilemme monipuolisia taide- ja askartelupuuhia vaihtuvilla teemoilla. <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Luovuus lentoon',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyk5y/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxlyfpu',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlxj6y/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:41:54.308647Z',
      last_modified_time: '2018-11-16T08:41:54.308686Z',
      date_published: null,
      start_time: '2018-12-18T08:30:02.132000Z',
      end_time: '2019-05-21T08:00:02.132000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Luovuus lentoon! Tervetuloa tailemaan ja askartelemaan monipuolisesti vaihtuvilla teemoilla. Paja sopii kaikenikäisille.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Luovuus lentoon -hetkeen ovat kaikki tervetulleita, se sopii kaikenikäisille! Kokeilemme monipuolisia taide- ja askartelupuuhia vaihtuvilla teemoilla. <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Luovuus lentoon',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyfpu/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxlyffy',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlxj6y/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:41:54.232001Z',
      last_modified_time: '2018-11-16T08:41:54.232023Z',
      date_published: null,
      start_time: '2018-12-11T08:30:02.130000Z',
      end_time: '2019-05-14T08:00:02.130000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Luovuus lentoon! Tervetuloa tailemaan ja askartelemaan monipuolisesti vaihtuvilla teemoilla. Paja sopii kaikenikäisille.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Luovuus lentoon -hetkeen ovat kaikki tervetulleita, se sopii kaikenikäisille! Kokeilemme monipuolisia taide- ja askartelupuuhia vaihtuvilla teemoilla. <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Luovuus lentoon',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyffy/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxlye4q',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlxj6y/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:41:54.156194Z',
      last_modified_time: '2018-11-16T08:41:54.156217Z',
      date_published: null,
      start_time: '2018-12-04T08:30:02.129000Z',
      end_time: '2019-05-07T08:00:02.129000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Luovuus lentoon! Tervetuloa tailemaan ja askartelemaan monipuolisesti vaihtuvilla teemoilla. Paja sopii kaikenikäisille.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Luovuus lentoon -hetkeen ovat kaikki tervetulleita, se sopii kaikenikäisille! Kokeilemme monipuolisia taide- ja askartelupuuhia vaihtuvilla teemoilla. <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Luovuus lentoon',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlye4q/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxlyes4',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlxj6y/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:41:54.079408Z',
      last_modified_time: '2018-11-16T08:41:54.079440Z',
      date_published: null,
      start_time: '2018-11-27T08:30:02.128000Z',
      end_time: '2019-04-30T08:00:02.128000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Luovuus lentoon! Tervetuloa tailemaan ja askartelemaan monipuolisesti vaihtuvilla teemoilla. Paja sopii kaikenikäisille.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Luovuus lentoon -hetkeen ovat kaikki tervetulleita, se sopii kaikenikäisille! Kokeilemme monipuolisia taide- ja askartelupuuhia vaihtuvilla teemoilla. <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Luovuus lentoon',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyes4/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxlyeju',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlxj6y/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:41:54.005486Z',
      last_modified_time: '2018-11-16T08:41:54.005510Z',
      date_published: null,
      start_time: '2018-11-20T08:30:00Z',
      end_time: '2019-04-23T08:00:00Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Luovuus lentoon! Tervetuloa tailemaan ja askartelemaan monipuolisesti vaihtuvilla teemoilla. Paja sopii kaikenikäisille.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Luovuus lentoon -hetkeen ovat kaikki tervetulleita, se sopii kaikenikäisille! Kokeilemme monipuolisia taide- ja askartelupuuhia vaihtuvilla teemoilla. <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Luovuus lentoon',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyeju/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxlxj6y',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: null,
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyeju/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyes4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlye4q/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyffy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyfpu/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyfym/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlygcy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyglm/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlygvy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyg6m/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyhie/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyhsi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyh4a/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyihi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyip4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyiy4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyjdq/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyjnm/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyjx4/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlykcy/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlykoi/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlyk5y/?format=json',
        },
      ],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:41:47.261493Z',
      last_modified_time: '2018-11-16T08:41:47.261515Z',
      date_published: null,
      start_time: '2018-11-20T08:30:00Z',
      end_time: '2019-09-24T08:00:02.170000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: 'recurring',
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Luovuus lentoon! Tervetuloa tailemaan ja askartelemaan monipuolisesti vaihtuvilla teemoilla. Paja sopii kaikenikäisille.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Luovuus lentoon -hetkeen ovat kaikki tervetulleita, se sopii kaikenikäisille! Kokeilemme monipuolisia taide- ja askartelupuuhia vaihtuvilla teemoilla. <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat leikkiseuraa. Vanhemmat ja lapset voivat osallistua toiminnan suunnitteluun ja toteutukseen yhdessä ohjaajien kanssa. Mahdollisuus omien ruokien lämmittämiseen ja kahvin/teen keittoon.<br></p>',
      },
      name: {
        fi: 'Luovuus lentoon',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxlxj6y/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
    {
      id: 'helsinki:aftrxgn7a4',
      location: {
        id: 'tprek:348',
        divisions: [
          {
            type: 'muni',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki',
            municipality: null,
            name: {
              fi: 'Helsinki',
              sv: 'Helsingfors',
            },
          },
          {
            type: 'district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/peruspiiri:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
          {
            type: 'sub_district',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/osa-alue:etelä-haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Etelä-Haaga',
              sv: 'Södra Haga',
            },
          },
          {
            type: 'neighborhood',
            ocd_id: 'ocd-division/country:fi/kunta:helsinki/kaupunginosa:haaga',
            municipality: 'Helsinki',
            name: {
              fi: 'Haaga',
              sv: 'Haga',
            },
          },
        ],
        created_time: null,
        last_modified_time: '2019-03-28T10:09:16.472819Z',
        custom_data: null,
        email: 'lp.isonneva@hel.fi',
        contact_type: null,
        address_region: null,
        postal_code: '00320',
        post_office_box_num: null,
        address_country: null,
        deleted: false,
        n_events: 129,
        image: 54048,
        data_source: 'tprek',
        publisher: 'ahjo:u021600',
        parent: null,
        replaced_by: null,
        position: {
          type: 'Point',
          coordinates: [
            24.891733,
            60.213047,
          ],
        },
        street_address: {
          fi: 'Isonnevantie 14-16',
          sv: 'Stormyrvägen 14-16',
        },
        address_locality: {
          fi: 'Helsinki',
          sv: 'Helsingfors',
          en: 'Helsinki',
        },
        info_url: {
          fi: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          sv: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
          en: 'https://www.hel.fi/Helsinki/fi/paivahoito-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
        },
        telephone: {
          fi: '09 310 22015, 040 684 6216',
        },
        description: {
          fi: 'Leikkipuiston piha-alue täysin uusittu v. 2015, joten leikkivälineitä on monenlaiseen käyttöön ja leikkiin. Iso kahluu-allas käytössä kesäisin. Luonto tarjoaa hienon mäenlaskumahdollisuuden talvisin.',
          sv: 'I en del av lekparkerna finns spelplaner som på vintern fryses till skridskobanor. I lekparkerna finns även bollväggar, utrustning för balansövningar, klätternät och plaskdammar som stöder motionsaktiviteter. Lekparkerna erbjuder möjligheter till motion och spel.',
          en: 'Some play parks include playing fields, which are frozen in the winter to serve as ice skating rinks. Play parks also include ball game walls, balancing equipment, climbing nets and wading pools, which support sporting activities. Play parks offer opportunities for sports and games.',
        },
        name: {
          fi: 'Leikkipuisto Isonneva',
          sv: 'Lekparken Isonneva',
          en: 'Playground Isonneva',
        },
        '@id': 'http://api.hel.fi/linkedevents/v1/place/tprek:348/?format=json',
        '@context': 'http://schema.org',
        '@type': 'Place',
      },
      keywords: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:12/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p316/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:11/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p8105/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
      ],
      super_event: {
        '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxgnh6e/?format=json',
      },
      event_status: 'EventScheduled',
      external_links: [
        {
          name: 'extlink_facebook',
          link: 'https://fi-fi.facebook.com/pages/category/Playground/Leikkipuisto-Isonneva-817101571662769/',
          language: 'fi',
        },
      ],
      offers: [
        {
          is_free: true,
          price: null,
          info_url: null,
          description: null,
        },
      ],
      data_source: 'helsinki',
      publisher: 'helsinki:u42030010201009',
      sub_events: [],
      images: [],
      in_language: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/language/fi/?format=json',
        },
      ],
      audience: [
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/?format=json',
        },
        {
          '@id': 'http://api.hel.fi/linkedevents/v1/keyword/helfi:1/?format=json',
        },
      ],
      created_time: '2018-11-16T08:18:40.014818Z',
      last_modified_time: '2018-11-16T08:18:40.014842Z',
      date_published: null,
      start_time: '2018-12-17T08:30:18.387000Z',
      end_time: '2019-05-20T07:45:18.387000Z',
      custom_data: null,
      audience_min_age: null,
      audience_max_age: null,
      super_event_type: null,
      provider: {
        fi: 'Leikkipuisto Isonneva',
      },
      short_description: {
        fi: 'Lorutellaan yhdessä!.',
      },
      provider_contact_info: null,
      location_extra_info: {
        fi: 'Leikkipuisto',
      },
      info_url: {
        fi: 'https://www.hel.fi/helsinki/fi/kasvatus-ja-koulutus/leikki-ja-avoin-toiminta/leikkipuistot/leikkipuistot/leikkipuisto-isonneva',
      },
      description: {
        fi: '<p>Leikkipuiston lorutuokioon ovat kaikki tervetulleita! Tuokioissa lorutellaan, yhdessä lorupussista löytyviä loruja. <br>Vanhemmilla on mahdollisuus tutustua muihin lapsiperheisiin ja lapset saavat uutta leikkiseuraa. </p>',
      },
      name: {
        fi: 'Loruhetki',
      },
      '@id': 'http://api.hel.fi/linkedevents/v1/event/helsinki:aftrxgn7a4/?format=json',
      '@context': 'http://schema.org',
      '@type': 'Event/LinkedEvent',
    },
  ],
}