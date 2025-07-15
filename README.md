# ResumeApp Node API

[<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?style=for-the-badge&color=0077b6">](https://github.com/SamKirkland/FTP-Deploy-Action)

- [Remote repo](https://github.com/jassoncodes/jassoncodesapi.git)

### Local development

```bash
docker run --name jasson-postgres -e POSTGRES_USER=valesaug_jcodes -e POSTGRES_PASSWORD=jcodesvalesaug -e POSTGRES_DB=valesaug_jassoncodes -p 5432:5432 -v jasson_pgdata:/var/lib/postgresql/data -d postgres:10.23
```

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
