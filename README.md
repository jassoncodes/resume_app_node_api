# ResumeApp Node API

#### Project Structure

```
📁 src/
├── 📁 @types/ → 1. Custom types definition (Data.ts)
├── 📁 interfaces/ → 2. Generic interfaces (IRepository.ts)
├── 📁 models/ → 3. TypeORM models (DataModel.ts)
├── 📁 config/ → 4. DB and TypeORM config (db connection, AppDataSource)
├── 📁 repositories/ → 5. Repository pattern implementation (DataRepository.ts)
├── 📁 services/ → 6. business logic (DataService.ts)
├── 📁 controllers/ → 7. HTTP requests handlers (DataController.ts)
├── 📁 routes/ → 8. API routes (DataRoutes.ts)
├── 📝 server.ts → 9. Config Express server (entry point)
```
