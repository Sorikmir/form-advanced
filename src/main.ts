import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';  // ✅ Required for standalone apps

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]  // ✅ Add this line
}).catch(err => console.error(err));
