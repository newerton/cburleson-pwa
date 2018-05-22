import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import * as moment from 'moment';
import * as d3 from 'd3';

// import * as d3Tip from 'd3-tip';

@Component({
  selector: 'app-lab-lifetime',
  templateUrl: './lab-lifetime.component.html',
  styleUrls: ['./lab-lifetime.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LabLifetimeComponent implements AfterViewInit {

  hoverInfo = ' ';

  calForm = {
    birthday: '1971-06-08',
    gender: 'male'
  };

  constructor(public formBuilder: FormBuilder) {
  }

  ngAfterViewInit() {
    // Render default (preview) graph
    this.renderGraph(this.calForm.birthday, this.calForm.gender);
  }

  initCalendarData(cal, birthday, debug) {

    let weekNum = 1;
    const weekDate = birthday;
    for (let y = 1; y < cal.calendarYears + 1; y++) {

      // There are 52 weeks in a year, so for this year, iterate 52 times (start with 1, not zero base for w)...
      for (let w = 1; w < 53; w++) {
        const week = {
          'weekNumber' : weekNum++,
          'yearNumber' : y,
          'weekNumberInYear' : w,
          'date': weekDate.clone()
        };
        cal.data.push( week );
        weekDate.add(1, 'week');
      }

    }

    if ( debug ) {
      for (let i = 0; i < cal.data.length; i++) {
        const week = cal.data[i];
        console.log(week.weekNumber + ' : ' + week.date.toString());
      }
    }

  }


  renderGraph(birthdate, sex) {

    console.log('LabLifetimeComponent > renderGraph()', birthdate, sex);

    const lifeExpectMale = 76;
    const lifeExpectFemale = 81;

    // Using moment.js instead of raw Date classes to get baked-in handling on complicated leap-year stuff

    const birthday = moment(birthdate); // Get from form option

    const today = moment();

    // console.log('Birthday: ' + birthday.toString());
    // console.log('Today: ' + today.toString());
    // console.log('Later: ' + birthday.add(45,'year').toString());

    // Calendar Settings
    const cal = {
      'calendarYears'     : 90,
      'weekBoxWidth'      : 9,
      'weekBoxHeight'     : 9,
      'weekRectOffset'    : 4,
      'marginLeft'        : 18,
      'marginTop'         : 20,
      'marginRight'       : 18,
      'marginBottom'      : 20,
      'backgroundColor'   : '#fff',
      'data'              : []
    };

    // Call with initCalendarData(cal,true) to debug in console
    this.initCalendarData(cal, birthday, false);

    // $('#object').parent().width()

    const width = (cal.marginLeft + cal.marginRight) +
      (cal.calendarYears * cal.weekBoxWidth) +
      (cal.calendarYears * cal.weekRectOffset) - cal.weekRectOffset;

    const height = (cal.marginTop + cal.marginBottom) +
      (52 * cal.weekBoxHeight) +
      (52 * cal.weekRectOffset) - cal.weekRectOffset;

    // Remove before appending or we'll get a new graph each time this method
    // is called and multiple graphs rendered on the page...
    d3.select('#graph').select('svg').remove();
    const svg = d3.select('#graph').append('svg:svg')
      .attr('id', 'svgGraph')
      .attr('width', width)
      .attr('height', height)
      .style('background', cal.backgroundColor);

    /*
    const tip = d3Tip()
      .attr('class', 'd3-tip')
      .html(function(data) {
        return data.date.format('ll'); // Format: Sep 4 1986
      })
      .direction('n')
      .offset([-6, 0]);
      */


    /* Invoke the tip in the context of your visualization */
    // svg.call(tip as any);

    svg.selectAll('rect').data(cal.data).enter().append('rect')
      .attr('class', function(data, i) {

        if (sex === 'male') {
          if (data.yearNumber === lifeExpectMale) {
            if ( data.date.isBefore(today) ) {
              return 'week expected elapsed';
            } else {
              return 'week expected';
            }
          } else {
            if ( data.date.isBefore(today) ) {
              return 'week elapsed';
            } else {
              return 'week';
            }
          }
        } else {
          if (data.yearNumber === lifeExpectFemale) {
            if ( data.date.isBefore(today) ) {
              return 'week expected elapsed';
            } else {
              return 'week expected';
            }
          } else {
            if ( data.date.isBefore(today) ) {
              return 'week elapsed';
            } else {
              return 'week';
            }
          }
        }


      })
      .attr('width', cal.weekBoxWidth).attr('height', cal.weekBoxHeight)
      .attr('x', function (data, i) {

        if (data.yearNumber === 1) {
          return cal.marginLeft;
        } else {
          return ((data.yearNumber - 1) * (cal.weekBoxWidth + cal.weekRectOffset) + cal.marginLeft);
        }

      })
      .attr('y', function(data, i) {

        if (data.weekNumberInYear === 1) {
          return cal.marginTop;
        } else {
          return  ((data.weekNumberInYear - 1) * (cal.weekBoxHeight + cal.weekRectOffset) + cal.marginTop);
        }

      } )
      /* Show and hide tip on mouse events */


      .on('mouseover', function(d) {
        d3.select(this).classed('active', true ); // should then accept fill from CSS
        // tip.show(d, this);

      })
      .on('mouseout', function(d) {
        d3.select(this).classed('active', false);
        // tip.hide();
      });

  }

}
