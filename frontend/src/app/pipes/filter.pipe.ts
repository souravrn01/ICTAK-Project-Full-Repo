import { Pipe, PipeTransform } from '@angular/core';
import { JobsComponent } from '../main/jobs/jobs.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string) {
    if(value.length===0 || filterString===''){
      return value;
    }

    const jobs = [];
    for(const job of value){
      if(job['jobTitle']=== filterString){
      jobs.push(job)
    }
  }
return jobs;
}

}
