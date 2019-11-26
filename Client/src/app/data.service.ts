import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public helper:HttpClient) { }

  select()
  {
    return this.helper.get("http://localhost:8888/emps");
  }
  SelectByNo(No)
  {
    return this.helper.get("http://localhost:8888/emps/" +No);
  }
  Update(empobj)
  {
    return this.helper.put("http://localhost:8888/emps/"+ empobj.No,empobj);
  }
  Delete(No)
  {
    return this.helper.delete("http://localhost:8888/emps/" + No);
  }
  Insert(empobj)
  {
    return this.helper.post("http://localhost:8888/emps" ,empobj);
  }
}
