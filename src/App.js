class App
{
  constructor(castInstance){
    this.context = castInstance;
    this.playerManager = castInstance.getPlayerManager();
    this.initializeListeners();
  }

  initializeListeners(){
    this.playerManager.addEventListener(cast.frameworks.events.category.CORE, (event) => {
      console.log('EVENTO ocurrido:' + event);
    });
  }
}

export default App;
