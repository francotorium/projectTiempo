var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var moment = require('moment');
moment().format();
var auth = 'API_KEY';
google.options({version:'v3', auth:auth});
var gapi = google.calendar({version:'v3', auth:auth});
var params = {
    calendarId : 'calender_id_string',
    singleEvents: true,
    timeMax : '2017-01-26T9:30:00Z',
    timeMin : '2016-12-26T9:30:00Z',
    timeZone: 'Pacific',
    fields:'items(end(date,dateTime),start(date,dateTime))' 
};

gapi.events.list(params, function(err, response) {
         if (err) {
                   console.log('The API returned an error: ' + err);
                   return;
                 }
               var events = response.items;
               if (events.length === 0) {
                         console.log('No upcoming events found.');
                       } else {
                         console.log('Upcoming events From Person:');
                         for (var i = 0; i < events.length; i++) {
                                     var event = events[i];
                                    // var start = event.start.dateTime || event.start.date;
                                     //console.log('This is the start'); 
                                     //console.log('%s - %s', start, event.summary);
                                     //var end = event.end.dateTime || event.end.date;
                                     //console.log('%s - %s', end, event.summary);
                                     var start = event.start.dateTime.substring(0,25); 
                                     var startMoment = moment(start, moment.ISA_8601);
                                     console.log('This is the start'); 
                                     console.log(startMoment.year());
                                     var end = event.end.dateTime;
                                     console.log('%s - %s', end, event.summary);
                                   }
                               }
 });

