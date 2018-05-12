# Generate a service

`ng generate service <service-name>`

For example:

`ng generate service records`

or...

`ng g service records`


If you put your service in the providers:[] section of the app.module.ts file,
it will be available to every module which requests it.

```
import { RecordsService } from './records.service'

constructor(private myService: RecordsService) {

}

ngOnInit() {
  this.records = this.myService.getData()
}
```
