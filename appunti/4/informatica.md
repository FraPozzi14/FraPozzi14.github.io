---
title: Informatica 4ª
layout: appunti
---
## Informatica — 4ª
Il programma di quarta è strutturato per la stragrande maggioranza sul <[sito](https://malafronte.github.io/info-quarta/)> del professore.

Ogni cosa è meglio spiegata lì. Le pagine possono risultare lunghe e laboriose ma è il più completo informatore che potreste trovare.

In ogni caso, carico qui il programma principale effettuato durante l'anno:

Ecco l'elenco dei punti invertito, con l'ordine cronologico/logico ribaltato esattamente come richiesto:


+ Presentazione del corso
+ Git e GitHub; concetto di VCS; installazione di Git; configurazione iniziale.
+ Git: git init, git status; git add; git commit
+ Git: gestione dei branch, merge e conflict.
+ Git: risoluzione di merge conflict; variazione del contenuto di file con git diff; analisi di casi di interesse.
+ Git: concetto di checkout, restore
+ GitHub; clonazione di un repository.
+ Github: configurazione chiavi SSH. Gestione da remoto e da locale.
+ C#: Introduzione ai delegati e lambda
+ C#: Delegati, Func, Action, Closure.
+ LINQ: esempi dal sito https://malafronte.github.io/docs-quarta/advanced-csharp/linq/ clausole Where, ForEach, OrderBy, OrderByDescending, ThenBy, ThenByDescending, OfType
+ LINQ:Select.
+ LINQ: GroupBy e Join
+ EF Core e SQLite; Setup di un progetto che utilizza EF Core.
+ EF Core: esempi di migrazioni e creazione di database.
+ EF Core: migrazione e inserimento dei dati
+ C# con EF Core: Gestione database
+ EF Core: cancellazione di oggetti dal database; concetti di chiavi; DBContext.
+ EF Core: modello dei dati. Associazioni "uno a molti", "uno ad uno" e "molti a molti".
+ EF Core: Esercitazione DBUtilizziPC con gestione del progetto su GitHub Classroom
+ Processes vs Threads: concetto di processo e di Thread; PCB e TCB; schedulazione di processi e di thread.
+ C# Threads: https://malafronte.github.io/info-quarta/corso/advanced-csharp/concurrent-computing/charp-threads
+ C#: programmazione concorrente. Concetto di race condition e di sezione critica.
+ Race Condition, Sezione Critica, Condizioni di Bernstein ; tecniche di sincronizzazione (lock e semafori): Produttore-Consumatore con buffer FIFO e LIFO; coda circolare su array. https://malafronte.github.io/info-quarta/corso/advanced-csharp/concurrent-computing/charp-threads/ e https://malafronte.github.io/info-quarta/corso/advanced-csharp/concurrent-computing/concurrent-programming/
+ Algoritmo del barbiere "The sleeping barber problem".
+ Algoritmo del barbiere: versione con semafori e con lock; problema dello stallo (deadlock).
+ Task in C#: costrutti per la programmazione concorrente con i Task (fork/join, join(count) e cobegin/coend); attached e detached Tasks; calcolo parallelo con Parallel.For . Concetto di CancellationTokenSource e di CancellationToken. Esercizi con i Task: simulazione palleggio tra ragazzi (esercizio svolto sulle dispense del corso)
+ Programmazione asincrona: parole chiave async e await.
+ Programmazione asincrona: confronto tra programmazione asincrona e programmazione parallela. Introduzione alla programmazione di rete.
+ Introduzione alla programmazione di rete. Concetto di URI, URL, URN. nomi di dominio e indirizzi IP; DNS: risoluzione dei nomi; ripasso di TCP, UDP. Introduzione al protocollo HTTP con particolare riferimento alla gestione delle porte usate dai processi per le connessioni di rete. Uso dei comandi nslookup e netstat. ?Well-known? ports.
+ Introduzione al formato JSON. Primi esempi di serializzazione e de-serializzazione in C#
+ Orientamento e FSL: Pubblicazione di librerie su Nuget
+ Serializzazione e de-serializzazione di oggetti JSON con metodi di estensione di HttpClient.
+ Esercizi di programmazione di rete: uso di GetAsync, GetFromJsonAsync, e GetStringAsync. Creazione di un data model a partire da un oggetto JSON. Utilizzo di json2csharp.com e del plugin di VS Code (Paste JSON as Code)
+ Esercizi di programmazione di rete: esempio con https://dummyjson.com/recipes. De-serializzazione di una lista di oggetti complessi.
+ REST API
+ Scrittura di una applicazione client per le REST API di Open Meteo
+ Introduzione al testing delle API con Postman
+ Installazione e uso di cURL
utilizzo di cURL per CRUD operation su endpoint remoto. Esempi con jsonplaceholder.typicode.com.
+ Cenni agli algoritmi crittografici a chiave simmetrica e asimmetrica. Funzionamento della firma digitale; Validazione di un certificato digitale.
+ Esercitazione con json-server: creazione di una applicazione C# che effettua richieste CRUD verso il server.
+ Setup di Opencode e configurazione di Copilot in Opencode;
+ FSL e orientamento: funzionamento di una rete neurale; analisi delle caratteristiche funzionali di un modello LLM. Finestra di contesto e indice di intelligenza su Artificial Analysis; concetto di token e meccanismo di funzionamento di un LLM (predizione del next token)
+ FES e orientamento: ripasso sull'installazione di OpenCode e sul collegamento di provider di LLM nel Cloud come GitHub Copilot, KiloCode, Ollama Cloud, OpenCode Zen.
+ Sviluppo di App in MAUI: analisi dei tutorial disponibili al link https://learn.microsoft.com/en-us/training/paths/build-apps-with-dotnet-maui/
+ Sviluppo di App in MAUI: tutorial https://learn.microsoft.com/en-us/training/modules/customize-xaml-pages-layout/
+ Sviluppo di App in MAUI: Tutorial completo sull'uso del Data Binding https://learn.microsoft.com/en-us/training/modules/separate-ui-and-logic-with-data-binding/
+ Sviluppo di App in MAUI: Tutorial: https://learn.microsoft.com/en-us/training/modules/design-mvvm-viewmodel/
+ Sviluppo di App in MAUI: Tutorial https://learn.microsoft.com/en-us/training/modules/use-shared-resources/
+ Sviluppo di app in MAUI: Tutorial: https://learn.microsoft.com/en-us/training/modules/create-multi-page-apps/
+ Progetto didattico .NET MAUI Workshop: https://github.com/dotnet-presentations/dotnet-maui-workshop
+ FSL e orientamento: setup di un progetto dotnet MAUI con gestione documentale per coding assistito da AI. Concetto di Skill e installazione di find-skill
+ FSL e orientamento: creazione di skill per agenti AI
+ FSL e orientamento: scrittura di un PRD con skills
+ FSL e orientamento: esempi di iterazioni di sviluppo di applicazioni .net MAUI Android con Opencode e Google Stitch