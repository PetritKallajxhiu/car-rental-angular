import {Component, OnInit} from '@angular/core';
import {Client, ClientServices} from '../../services/clientServices';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientServie: ClientServices) {
  }

  ngOnInit(): void {
    this.updateClients();
  }

  updateClients(): void {
    this.clientServie.getAll().subscribe(response => {
      this.clients = response;
    });
  }

  onDeleteClients(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    console.log(shouldDelete);
    if (shouldDelete) {
      this.clientServie.delete(id).subscribe(response => {
        this.updateClients();
      });
    }
  }

}
