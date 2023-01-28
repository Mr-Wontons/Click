$(document).ready(function () {
  var clickers = {
    clickPlus: 1,
    autoPlus: 0,
    autoMachines: 0,
    autoPow: 1,
    upgrades: 0,
    autoPrice: 100,
    item: 0,
    itemPrice: 1,
    clicks: 0,
  };

  var clickaxes = {
    clickPlus: 1,
    autoPlus: 0,
    autoMachines: 0,
    autoPow: 1,
    upgrades: 0,
    autoPrice: 550,
    item: 0,
    itemPrice: 4,
    price: 350,
    clickerItem: 0,
    clicks: 0,
  };

  var smelters = {
    clickPlus: 1,
    autoPlus: 0,
    autoMachines: 0,
    autoPow: 1,
    upgrades: 0,
    autoPrice: 7500,
    item: 0,
    itemPrice: 10,
    price: 2500,
    clickerItem: 0,
    clicks: 0,
  };

  var solders = {
    clickPlus: 1,
    autoPlus: 0,
    autoMachines: 0,
    autoPow: 1,
    upgrades: 0,
    autoPrice: 50000,
    item: 0,
    itemPrice: 35,
    price: 30000,
    clickerItem: 0,
    clicks: 0,
  };

  var cliks = 0; //Get from selling Clics
  var doubleClickPowPrice = 350;
  var doubleAutoClickaxesPrice = 2500;
  var doubleAutoSmeltersPrice = 30000;
  var doubleAutoSoldersPrice = 100000;
  var showClicker = 1;
  var clickersAmt = 1;
  var menu;
  var event;

  changeMain();
  changeInventory();
  changeAchievements();
  changeClickers();
  changeStore();

  setInterval(function () {
    clickers.item += clickers.autoPlus;
    changeInventory();
    changeStore();
  }, 1000); //AutoClikcers

  setInterval(function () {
    clickaxes.item += clickaxes.autoPlus;
    changeInventory();
    changeStore();
  }, 1000); //Auto Clickaxes

  setInterval(function () {
    smelters.item += smelters.autoPlus;
    changeInventory();
    changeStore();
    changeAchievements();
  }, 1000); //Auto Smelters

  setInterval(function () {
    solders.item += solders.autoPlus;
    changeInventory();
    changeStore();
    changeAchievements();
  }, 1000); //Auto Solders

  setInterval(function () {
    saveGame();
  }, 60000); //Auto Save

  $("#saveGame").click(function () {
    saveGame();
  });

  $("#resetGame").click(function () {
    if (confirm("Are you sure you want to reset?")) {
      var gameSave = {};
      localStorage.setItem("gameSave", JSON.stringify(gameSave));
      localStorage.clear();
      location.reload();
    }
  });

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.ctrlKey & (event.which == 83)) {
        event.preventDefault();
        saveGame();
      }
    },
    false
  );

  $("#buyClewerySolder").click(function () {
    if ((cliks >= solders.price) & (solders.clickerItem < 1)) {
      cliks -= solders.price;
      solders.clickerItem++;
      clickersAmt++;
      changeInventory();
      changeStore();
      changeMain();
      changeClickers();
      changeAchievements();
      $("#buyClewerySolder").css("display", "none");
    } else {
    }
  });

  $("#autoClewerySolder").click(function () {
    if (cliks >= solders.autoPrice) {
      cliks -= solders.autoPrice;
      solders.autoPlus += solders.autoPow;
      solders.autoMachines++;
      solders.autoPrice *= 1.06;
      changeInventory();
      changeStore();
      changeClickers();
      changeAchievements();
    } else {
    }
  });

  $("#sellAllj").click(function () {
    cliks += solders.itemPrice * solders.item;
    solders.item = 0;
    changeInventory();
    changeStore();
    changeAchievements();
  });

  $("#solderClewery").click(function () {
    if (solders.clickerItem == 0) {
      alert("You have nothing to solder Clewery with!");
    } else {
      solders.item += solders.clickPlus;
      solders.clicks++;
      changeInventory();
      changeStore();
      changeAchievements();
    }
  });

  $("#buyClironSmelter").click(function () {
    if ((cliks >= smelters.price) & (smelters.clickerItem < 1)) {
      cliks -= smelters.price;
      smelters.clickerItem++;
      clickersAmt++;
      changeInventory();
      changeStore();
      changeMain();
      changeClickers();
      changeAchievements();
      $("#buyClironSmelter").css("display", "none");
    } else {
    }
  });

  $("#autoClironSmelts").click(function () {
    if (cliks >= smelters.autoPrice) {
      cliks -= smelters.autoPrice;
      smelters.autoPlus += smelters.autoPow;
      smelters.autoMachines++;
      smelters.autoPrice *= 1.06;
      changeInventory();
      changeStore();
      changeClickers();
      changeAchievements();
    } else {
    }
  });

  $("#sellAlli").click(function () {
    cliks += smelters.itemPrice * smelters.item;
    smelters.item = 0;
    changeInventory();
    changeStore();
    changeAchievements();
  });

  $("#smeltCliron").click(function () {
    if (smelters.clickerItem == 0) {
      alert("You have nothing to smelt Cliron with!");
    } else {
      smelters.item += smelters.clickPlus;
      smelters.clicks++;
      changeInventory();
      changeStore();
      changeAchievements();
    }
  });

  $("#mineClickstone").click(function () {
    if (clickaxes.clickerItem == 0) {
      alert("You have nothing to mine Clickstone with!");
    } else {
      clickaxes.item += clickaxes.clickPlus;
      clickaxes.clicks++;
      changeInventory();
      changeStore();
      changeAchievements();
    }
  });

  $("#autoClickaxe").click(function () {
    if ((cliks >= clickaxes.autoPrice) & (clickaxes.clickerItem == 1)) {
      cliks -= clickaxes.autoPrice;
      clickaxes.autoPlus += clickaxes.autoPow;
      clickaxes.autoMachines++;
      clickaxes.autoPrice *= 1.06;
      changeInventory();
      changeStore();
      changeClickers();
      changeAchievements();
    } else {
    }
  });

  $("#autoClicker").click(function () {
    if (cliks >= clickers.autoPrice) {
      cliks -= clickers.autoPrice;
      clickers.autoPlus += clickers.autoPow;
      clickers.autoMachines++;
      clickers.autoPrice *= 1.06;
      changeInventory();
      changeStore();
      changeClickers();
      changeAchievements();
    } else {
    }
  });

  $("#buyClickaxe").click(function () {
    if ((cliks >= clickaxes.price) & (clickaxes.clickerItem < 1)) {
      cliks -= clickaxes.itemPrice;
      clickaxes.clickerItem++;
      clickersAmt++;
      changeInventory();
      changeStore();
      changeMain();
      changeClickers();
      changeAchievements();
      $("#buyClickaxe").css("display", "none");
    } else {
    }
  });

  $("#clikc").click(function () {
    clickers.item += clickers.clickPlus;
    clickers.clicks++;
    changeInventory();
    changeStore();
    changeAchievements();
  });

  $("#sellAll").click(function () {
    cliks += clickers.itemPrice * clickers.item;
    clickers.item = 0;
    changeInventory();
    changeStore();
    changeAchievements();
  });

  $("#sellAlls").click(function () {
    cliks += clickaxes.itemPrice * clickaxes.item;
    clickaxes.item = 0;
    changeInventory();
    changeStore();
    changeAchievements();
  });

  $("#doubleClickPow").click(function () {
    if (
      (clickers.autoMachines >= 5) &
      (clickers.upgrades < 1) &
      (cliks >= doubleClickPowPrice)
    ) {
      cliks -= doubleClickPowPrice;
      clickers.autoPlus *= 2;
      clickers.autoPow *= 2;
      clickers.clickPlus *= 2;
      clickers.upgrades++;
      changeInventory();
      changeStore();
      changeClickers();
      changeAchievements();
      $("#doubleClickPow").css("display", "none");
    }
  });

  $("#doubleAutoClickaxes").click(function () {
    if (
      (clickaxes.autoMachines >= 5) &
      (clickaxes.upgrades < 1) &
      (cliks >= doubleAutoClickaxesPrice)
    ) {
      cliks -= doubleAutoClickaxesPrice;
      clickaxes.autoPow *= 2;
      clickaxes.autoPlus *= 2;
      clickaxes.upgrades++;
      changeInventory();
      changeStore();
      changeClickers();
      changeAchievements();
      $("#doubleAutoClickaxes").css("display", "none");
    }
  });

  $("#doubleAutoClironSmelters").click(function () {
    if (
      (smelters.autoMachines >= 5) &
      (smelters.upgrades < 1) &
      (cliks >= doubleAutoSmeltersPrice)
    ) {
      cliks -= doubleAutoSmeltersPrice;
      smelters.autoPow *= 2;
      smelters.autoPlus *= 2;
      smelters.upgrades++;
      changeInventory();
      changeStore();
      changeClickers();
      changeAchievements();
      $("#doubleAutoClironSmelters").css("display", "none");
    }
  });

  $("#doubleAutoClewery").click(function () {
    if (
      (solders.autoMachines >= 5) &
      (solders.upgrades < 1) &
      (cliks >= doubleAutoSoldersPrice)
    ) {
      cliks -= doubleAutoSoldersPrice;
      solders.autoPow *= 2;
      solders.autoPlus *= 2;
      solders.upgrades++;
      changeInventory();
      changeStore();
      changeClickers();
      changeAchievements();
      $("#doubleAutoClewery").css("display", "none");
    }
  });

  $("#prevBtn").click(function () {
    showClicker--;
    changeClickers();
    changeStore();
  });

  $("#vAchievements").click(function () {
    menu = switchMenu("achievements");
    changeAchievements();
  });

  $("#returnA").click(function () {
    menu = switchMenu("main");
  });

  $("#nextBtn").click(function () {
    showClicker++;
    changeClickers();
    changeStore();
  });

  function changeInventory() {
    $("#cliks").html("Cliks: $" + cliks);

    if (clickers.item == 1) {
      $("#clics").html("You now own " + clickers.item + " Clic. ");
    } else {
      $("#clics").html("You now own " + clickers.item + " Clics. ");
    }

    if (clickaxes.item > 0) {
      $("#clickstone").html(
        "You now own " + clickaxes.item + " bits of Clickstone. "
      );
    } else {
      $("#clickstone").html("");
    }

    if (smelters.item > 0) {
      $("#cliron").html("You now own " + smelters.item + " Cliron Clingots. ");
    } else {
      $("#cliron").html("");
    }

    if (solders.item > 0) {
      $("#clewery").html(
        "You now own " + solders.item + " pieces of Clewery. "
      );
    } else {
      $("#clewery").html("");
    }
  }

  function changeStore() {
    if (Number.isInteger(clickers.autoPrice)) {
    } else {
      clickers.autoPrice = Math.round(clickers.autoPrice);
    }
    $("#autoClicker").html(" Buy 1 Clikcer " + " $" + clickers.autoPrice);

    if (Number.isInteger(clickaxes.autoPrice)) {
    } else {
      clickaxes.autoPrice = Math.round(clickaxes.autoPrice);
    }
    $("#autoClickaxe").html(
      " Buy 1 Auto Clickaxe" + " $" + clickaxes.autoPrice
    );

    if (Number.isInteger(smelters.autoPrice)) {
    } else {
      smelters.autoPrice = Math.round(smelters.autoPrice);
    }
    $("#autoClironSmelts").html(
      " Buy 1 Cliron Smelter" + " $" + smelters.autoPrice
    );

    if (Number.isInteger(solders.autoPrice)) {
    } else {
      solders.autoPrice = Math.round(solders.autoPrice);
    }
    $("#autoClewerySolder").html(
      " Buy 1 Clewery Solder" + " $" + solders.autoPrice
    );

    if (clickers.autoMachines >= 1) {
      $("#buyClickaxe").css("display", "block");
    } else {
      $("#buyClickaxe").css("display", "none");
    }

    if ((cliks >= clickaxes.price) & (clickaxes.clickerItem < 1)) {
      $("#buyClickaxe").disabled = false;
      $("#buyClickaxe").css("background-color", "#B5B5B5");
      $("#buyClickaxe").css("color", "green");
    } else {
      $("#buyClickaxe").disabled = true;
      $("#buyClickaxe").css("background-color", "#9C9C9C");
      $("#buyClickaxe").css("color", "red");
    }

    if (clickaxes.clickerItem == 1) {
      $("#buyClironSmelter").css("display", "block");
      $("#buyClickaxe").css("display", "none");
    } else {
      $("#buyClironSmelter").css("display", "none");
    }

    if ((cliks >= smelters.price) & (smelters.clickerItem < 1)) {
      $("#buyClironSmelter").disabled = false;
      $("#buyClironSmelter").css("background-color", "#B5B5B5");
      $("#buyClironSmelter").css("color", "green");
    } else {
      $("#buyClironSmelter").disabled = true;
      $("#buyClironSmelter").css("background-color", "#9C9C9C");
      $("#buyClironSmelter").css("color", "red");
    }

    if (clickaxes.autoMachines >= 1) {
      $("#buyClironSmelter").css("display", "block");
    } else {
      $("#buyClironSmelter").css("display", "none");
    }

    if (smelters.clickerItem == 1) {
      $("#buyClironSmelter").css("display", "none");
    } else {
      $("#buyClewerySolder").css("display", "none");
    }

    if ((cliks >= solders.price) & (solders.clickerItem < 1)) {
      $("#buyClewerySolder").disabled = false;
      $("#buyClewerySolder").css("background-color", "#B5B5B5");
      $("#buyClewerySolder").css("color", "green");
    } else {
      $("#buyClewerySolder").disabled = true;
      $("#buyClewerySolder").css("background-color", "#9C9C9C");
      $("#buyClewerySolder").css("color", "red");
    }

    if (smelters.autoMachines >= 1) {
      $("#buyClewerySolder").css("display", "block");
    } else {
      $("#buyClewerySolder").css("display", "none");
    }

    if (solders.clickerItem == 1) {
      $("#autoClewerySolder").css("display", "block");
      $("#sellAllj").css("display", "block");
      $("#buyClewerySolder").css("display", "none");
    } else {
      $("#autoClewerySolder").css("display", "none");
      $("#sellAllj").css("display", "none");
    }

    if (solders.autoMachines >= 1) {
      //For Later
    } else {
    }

    if (
      (clickers.autoMachines >= 5) &
      (clickers.upgrades < 1) &
      (cliks >= doubleClickPowPrice)
    ) {
      $("#doubleClickPow").disabled = false;
      $("#doubleClickPow").css("background-color", "#B5B5B5");
      $("#doubleClickPow").css("color", "green");
    } else {
      $("#doubleClickPow").disabled = true;
      $("#doubleClickPow").css("background-color", "#9C9C9C");
      $("#doubleClickPow").css("color", "red");
    }

    if (
      (clickaxes.autoMachines >= 5) &
      (clickaxes.upgrades < 1) &
      (cliks >= doubleAutoClickaxesPrice)
    ) {
      $("#doubleAutoClickaxes").disabled = false;
      $("#doubleAutoClickaxes").css("background-color", "#B5B5B5");
      $("#doubleAutoClickaxes").css("color", "green");
    } else {
      $("#doubleAutoClickaxes").disabled = true;
      $("#doubleAutoClickaxes").css("background-color", "#9C9C9C");
      $("#doubleAutoClickaxes").css("color", "red");
    }

    if (
      (smelters.autoMachines >= 5) &
      (smelters.upgrades < 1) &
      (cliks >= doubleAutoSmeltersPrice)
    ) {
      $("#doubleAutoClironSmelters").disabled = false;
      $("#doubleAutoClironSmelters").css("background-color", "#B5B5B5");
      $("#doubleAutoClironSmelters").css("color", "green");
    } else {
      $("#doubleAutoClironSmelters").disabled = true;
      $("#doubleAutoClironSmelters").css("background-color", "#9C9C9C");
      $("#doubleAutoClironSmelters").css("color", "red");
    }

    if (
      (solders.autoMachines >= 5) &
      (solders.upgrades < 1) &
      (cliks >= doubleAutoSoldersPrice)
    ) {
      $("#doubleAutoClewery").disabled = false;
      $("#doubleAutoClewery").css("background-color", "#B5B5B5");
      $("#doubleAutoClewery").css("color", "green");
    } else {
      $("#doubleAutoClewery").disabled = true;
      $("#doubleAutoClewery").css("background-color", "#9C9C9C");
      $("#doubleAutoClewery").css("color", "red");
    }

    if (showClicker == 1) {
      $("#sellAlls").css("display", "none");
      $("#sellAlli").css("display", "none");
      $("#sellAllj").css("display", "none");
      $("#autoClickaxe").css("display", "none");
      $("#buyClironSmelter").css("display", "none");
      $("#buyClewerySolder").css("display", "none");

      if (clickers.item > 0) {
        $("#sellAll").css("display", "block");
        $("#sellAll").disabled = false;
        $("#sellAll").css("background-color", "#B5B5B5");
        $("#sellAll").css("color", "green");
      } else {
        $("#sellAll").disabled = true;
        $("#sellAll").css("background-color", "#9C9C9C");
        $("#sellAll").css("color", "red");
      }

      if (cliks >= clickers.autoPrice) {
        $("#autoClicker").css("display", "block");
        $("#autoClicker").disabled = false;
        $("#autoClicker").css("background-color", "#B5B5B5");
        $("#autoClicker").css("color", "green");
      } else {
        $("#autoClicker").css("display", "block");
        $("#autoClicker").disabled = true;
        $("#autoClicker").css("background-color", "#9C9C9C");
        $("#autoClicker").css("color", "red");
      }

      if ((clickers.autoMachines >= 5) & (clickers.upgrades < 1)) {
        $("#doubleClickPow").css("display", "block");
      } else {
        $("#doubleClickPow").css("display", "none");
      }
    } else {
      $("#sellAll").css("display", "none");
      $("#autoClicker").css("display", "none");
      $("#doubleClickPow").css("display", "none");
    }

    if (showClicker == 2) {
      $("#sellAlls").css("display", "block");
      $("#autoClickaxe").css("display", "block");
      $("#sellAll").css("display", "none");
      $("#sellAlli").css("display", "none");
      $("#sellAllj").css("display", "none");
      $("#autoClironSmelts").css("display", "none");
      $("#buyClewerySolder").css("display", "none");

      if (clickaxes.item > 0) {
        $("#sellAlls").css("display", "block");
        $("#sellAlls").disabled = false;
        $("#sellAlls").css("background-color", "#B5B5B5");
        $("#sellAlls").css("color", "green");
      } else {
        $("#sellAlls").disabled = true;
        $("#sellAlls").css("background-color", "#9C9C9C");
        $("#sellAlls").css("color", "red");
      }

      if ((cliks >= clickaxes.autoPrice) & (clickaxes.clickerItem == 1)) {
        $("#autoClickaxe").css("display", "block");
        $("#autoClickaxe").disabled = false;
        $("#autoClickaxe").css("background-color", "#B5B5B5");
        $("#autoClickaxe").css("color", "green");
      } else {
        $("#autoClickaxe").css("display", "block");
        $("#autoClickaxe").css("background-color", "#9C9C9C");
        $("#autoClickaxe").css("color", "red");
      }

      if ((clickaxes.autoMachines >= 5) & (clickaxes.upgrades < 1)) {
        $("#doubleAutoClickaxes").css("display", "block");
      } else {
        $("#doubleAutoClickaxes").css("display", "none");
      }
    } else {
      $("#sellAlls").css("display", "none");
      $("#autoClickaxe").css("display", "none");
      $("#buyClironSmelter").css("display", "none");
      $("#doubleAutoClickaxes").css("display", "none");
    }

    if (showClicker == 3) {
      $("#sellAlli").css("display", "block");
      $("#autoClironSmelts").css("display", "block");
      $("#sellAll").css("display", "none");
      $("#sellAlls").css("display", "none");
      $("#sellAllj").css("display", "none");

      if (smelters.item > 0) {
        $("sellAlli").css("display", "block");
        $("#sellAlli").disabled = false;
        $("#sellAlli").css("background-color", "#B5B5B5");
        $("#sellAlli").css("color", "green");
      } else {
        $("#sellAlli").disabled = true;
        $("#sellAlli").css("background-color", "#9C9C9C");
        $("#sellAlli").css("color", "red");
      }

      if ((cliks >= smelters.autoPrice) & (smelters.clickerItem == 1)) {
        $("#autoClironSmelts").css("display", "block");
        $("#autoClironSmelts").disabled = false;
        $("#autoClironSmelts").css("background-color", "#B5B5B5");
        $("#autoClironSmelts").css("color", "green");
      } else {
        $("autoClironSmelts").css("display", "block");
        $("#autoClironSmelts").disabled = true;
        $("#autoClironSmelts").css("background-color", "#9C9C9C");
        $("#autoClironSmelts").css("color", "red");
      }

      if ((smelters.autoMachines >= 5) & (smelters.upgrades < 1)) {
        $("#doubleAutoClironSmelters").css("display", "block");
      } else {
        $("#doubleAutoClironSmelters").css("display", "none");
      }
    } else {
      $("#sellAlli").css("display", "none");
      $("#autoClironSmelts").css("display", "none");
      $("#buyClewerySolder").css("display", "none");
      $("#doubleAutoClironSmelters").css("display", "none");
    }

    if (showClicker == 4) {
      $("#sellAllj").css("display", "block");
      $("#autoClewerySolder").css("display", "block");
      $("#sellAll").css("display", "none");
      $("#sellAlls").css("display", "none");
      $("#sellAlli").css("display", "none");

      if (solders.item > 0) {
        $("#sellAllj").css("display", "block");
        $("#sellAllj").disabled = false;
        $("#sellAllj").css("background-color", "#B5B5B5");
        $("#sellAllj").css("color", "green");
      } else {
        $("#sellAllj").disabled = true;
        $("#sellAllj").css("background-color", "#9C9C9C");
        $("#sellAllj").css("color", "red");
      }

      if ((cliks >= solders.autoPrice) & (solders.clickerItem == 1)) {
        $("#autoClewerySolder").css("display", "block");
        $("#autoClewerySolder").disabled = false;
        $("#autoClewerySolder").css("background-color", "#B5B5B5");
        $("#autoClewerySolder").css("color", "green");
      } else {
        $("#autoClewerySolder").css("display", "block");
        $("#autoClewerySolder").disabled = true;
        $("#autoClewerySolder").css("background-color", "#9C9C9C");
        $("#autoClewerySolder").css("color", "red");
      }

      if ((solders.autoMachines >= 5) & (solders.upgrades < 1)) {
        $("#doubleAutoClewery").css("display", "block");
      } else {
        $("#doubleAutoClewery").css("display", "none");
      }
    } else {
      $("#sellAllj").css("display", "none");
      $("#autoClewerySolder").css("display", "none");
      $("#doubleAutoClewery").css("display", "none");
    }
  }

  function changeMain() {
    changeClickers();

    if (clickaxes.clickerItem > 0) {
      $("#mineClickstone").css("display", "block");
      $("#prevBtn").css("display", "block");
      $("#nextBtn").css("display", "block");
    } else {
      $("#mineClickstone").css("display", "none");
      $("#prevBtn").css("display", "none");
      $("#nextBtn").css("display", "none");
    }

    if (smelters.clickerItem > 0) {
      $("#smeltCliron").css("display", "block");
    } else {
      $("#smeltCliron").css("display", "none");
    }

    if (solders.clickerItem > 0) {
      $("#solderClewery").css("display", "block");
    } else {
      $("#solderClewery").css("display", "none");
    }
  }

  function changeClickers() {
    if (showClicker < 1) {
      showClicker = clickersAmt;
    }

    if (showClicker > clickersAmt) {
      showClicker = 1;
    }

    if (showClicker == 1) {
      $("#clikc").css("display", "block");
      $("#mineClickstone").css("display", "none");
      $("#smeltCliron").css("display", "none");
      $("#solderClewery").css("display", "none");
      $("#aClickaxes").html("");
      $("#aCliron").html("");
      $("#aClewery").html("");

      if (clickers.autoPlus > 0) {
        $("#aClickers").html(
          "AutoClickers Clicking " + clickers.autoPlus + " Clics per second. "
        );
      } else {
        $("#aClickers").html("");
      }

      if (clickers.autoMachines > 0) {
        $("#bCursor").html("You own " + clickers.autoMachines + " Clickers");
        $("#bClickaxe").html("");
        $("#bSmelter").html("");
        $("#bSolder").html("");
      } else {
        $("#bCursor").html("");
        $("#bClickaxe").html("");
        $("#bSmelter").html("");
        $("#bSolder").html("");
      }
    }

    if (showClicker == 2) {
      $("#mineClickstone").css("display", "block");
      $("#clikc").css("display", "none");
      $("#smeltCliron").css("display", "none");
      $("#solderClewery").css("display", "none");
      $("#aClickers").html("");
      $("#aCliron").html("");
      $("#aClewery").html("");

      if (clickaxes.autoPlus > 0) {
        $("#aClickaxes").html(
          " Auto Clickaxes Mining " +
            clickaxes.autoPlus +
            " Clickstone per second. "
        );
      } else {
        $("#aClickaxes").html("");
      }

      if (clickaxes.autoMachines > 0) {
        $("#bClickaxe").html(
          "You own " + clickaxes.autoMachines + " Auto Clickaxes"
        );
        $("#bCursor").html("");
        $("#bSmelter").html("");
        $("#bSolder").html("");
      } else {
        $("#bClickaxe").html("");
        $("#bCursor").html("");
        $("#bSmelter").html("");
        $("#bSolder").html("");
      }
    }

    if (showClicker == 3) {
      $("#smeltCliron").css("display", "block");
      $("#clikc").css("display", "none");
      $("#mineClickstone").css("display", "none");
      $("#aClickers").html("");
      $("#aClickaxes").html("");
      $("#aClewery").html("");
      $("#solderClewery").css("display", "none");

      if (smelters.autoPlus > 0) {
        $("#aCliron").html(
          " Auto Cliron Smelters Smelting " +
            smelters.autoPlus +
            " Cliron Clingots per second "
        );
      } else {
        $("#aCliron").html("");
      }

      if (smelters.autoMachines > 0) {
        $("#bSmelter").html(
          "You own " + smelters.autoMachines + " Auto Smelters"
        );
        $("#bCursor").html("");
        $("#bClickaxe").html("");
        $("#bSolder").html("");
      } else {
        $("#bSmelter").html("");
        $("#bCursor").html("");
        $("#bClickaxe").html("");
        $("#bSolder").html("");
      }
    }

    if (showClicker == 4) {
      $("#solderClewery").css("display", "block");
      $("#smeltCliron").css("display", "none");
      $("#clikc").css("display", "none");
      $("#mineClickstone").css("display", "none");
      $("#aClickers").html("");
      $("#aClickaxes").html("");
      $("#aCliron").html("");

      if (solders.autoPlus > 0) {
        $("#aClewery").html(
          " Clewery Solders Soldering " +
            solders.autoPlus +
            " pieces of Clewery per second "
        );
      } else {
        $("#aClewery").html("");
      }

      if (solders.autoMachines > 0) {
        $("#bSolder").html(
          "You own " + solders.autoMachines + " Clewery Solders"
        );
        $("#bSmelter").html("");
        $("#bCursor").html("");
        $("#bClickaxe").html("");
      } else {
        $("#bSolder").html("");
        $("#bSmelter").html("");
        $("#bCursor").html("");
        $("#bClickaxe").html("");
      }
    }
  }

  function changeAchievements() {
    if (clickers.clicks >= 1) {
      $("#clickerA1").css("display", "inline");
    } else {
      $("#clickerA1").css("display", "none");
    }

    if (clickers.autoMachines >= 1) {
      $("#clickerA2").css("display", "inline");
    } else {
      $("#clickerA2").css("display", "none");
    }

    if (clickaxes.clicks >= 1) {
      $("#clickaxeA1").css("display", "inline");
    } else {
      $("#clickaxeA1").css("display", "none");
    }

    if (clickaxes.autoMachines >= 1) {
      $("#clickaxeA2").css("display", "inline");
    } else {
      $("#clickaxeA2").css("display", "none");
    }

    if (smelters.clicks >= 1) {
      $("#smelterA1").css("display", "inline");
    } else {
      $("#smelterA1").css("display", "none");
    }

    if (smelters.autoMachines >= 1) {
      $("#smelterA2").css("display", "inline");
    } else {
      $("#smelterA2").css("display", "none");
    }

    if (solders.clicks >= 1) {
      $("#solderA1").css("display", "inline");
    } else {
      $("#solderA1").css("display", "none");
    }

    if (solders.autoMachines >= 1) {
      $("#solderA2").css("display", "inline");
    } else {
      $("#solderA2").css("display", "none");
    }
  }

  function saveGame() {
    var gameSave = {
      gamecliks: cliks,
      clickersClicks: clickers.clicks,
      clickersPlus: clickers.clickPlus,
      clickersAutoPlus: clickers.autoPlus,
      clickersAutoMachines: clickers.autoMachines,
      clickersAutoPow: clickers.autoPow,
      clickersUpgrades: clickers.upgrades,
      clickersAutoPrice: clickers.autoPrice,
      clickersItem: clickers.item,
      clickersItemPrice: clickers.itemPrice,
      clickaxesClicks: clickaxes.clicks,
      clickaxesPlus: clickaxes.clickPlus,
      clickaxesAutoPlus: clickaxes.autoPlus,
      clickaxesAutoMachines: clickaxes.autoMachines,
      clickaxesAutoPow: clickaxes.autoPow,
      clickaxesUpgrades: clickaxes.upgrades,
      clickaxesAutoPrice: clickaxes.autoPrice,
      clickaxesItem: clickaxes.item,
      clickaxesItemPrice: clickaxes.itemPrice,
      clickaxesPrice: clickaxes.price,
      clickaxesClickerItem: clickaxes.clickerItem,
      smeltersClicks: smelters.clicks,
      smeltersPlus: smelters.clickPlus,
      smeltersAutoPlus: smelters.autoPlus,
      smeltersAutoMachines: smelters.autoMachines,
      smeltersAutoPow: smelters.autoPow,
      smeltersUpgrades: smelters.upgrades,
      smeltersAutoPrice: smelters.autoPrice,
      smeltersItem: smelters.item,
      smeltersItemPrice: smelters.itemPrice,
      smeltersPrice: smelters.price,
      smeltersClickerItem: smelters.clickerItem,
      soldersClicks: solders.clicks,
      soldersPlus: solders.clickPlus,
      soldersAutoPlus: solders.autoPlus,
      soldersAutoMachines: solders.autoMachines,
      soldersAutoPow: solders.autoPow,
      soldersUpgrades: solders.upgrades,
      soldersAutoPrice: solders.autoPrice,
      soldersItem: solders.item,
      soldersItemPrice: solders.itemPrice,
      soldersPrice: solders.price,
      soldersClickerItem: solders.clickerItem,
      showClicker: showClicker,
      clickersAmt: clickersAmt,
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
  }

  function loadSave() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.gamecliks !== "undefined") cliks = savedGame.gamecliks;
    if (typeof savedGame.clickersClicks !== "undefined")
      clickers.clicks = savedGame.clickersClicks;
    if (typeof savedGame.clickersPlus !== "undefined")
      clickers.clickPlus = savedGame.clickersPlus;
    if (typeof savedGame.clickersAutoPlus !== "undefined")
      clickers.autoPlus = savedGame.clickersAutoPlus;
    if (typeof savedGame.clickersAutoMachines !== "undefined")
      clickers.autoMachines = savedGame.clickersAutoMachines;
    if (typeof savedGame.clickersAutoPow !== "undefined")
      clickers.autoPow = savedGame.clickersAutoPow;
    if (typeof savedGame.clickersUpgrades !== "undefined")
      clickers.upgrades = savedGame.clickersUpgrades;
    if (typeof savedGame.clickersAutoPrice !== "undefined")
      clickers.autoPrice = savedGame.clickersAutoPrice;
    if (typeof savedGame.clickersItem !== "undefined")
      clickers.item = savedGame.clickersItem;
    if (typeof savedGame.clickersItemPrice !== "undefined")
      clickers.itemPrice = savedGame.clickersItemPrice;
    if (typeof savedGame.clickaxesClicks !== "undefined")
      clickaxes.clicks = savedGame.clickaxesClicks;
    if (typeof savedGame.clickaxesPlus !== "undefined")
      clickaxes.clickPlus = savedGame.clickaxesPlus;
    if (typeof savedGame.clickaxesAutoPlus !== "undefined")
      clickaxes.autoPlus = savedGame.clickaxesAutoPlus;
    if (typeof savedGame.clickaxesAutoMachines !== "undefined")
      clickaxes.autoMachines = savedGame.clickaxesAutoMachines;
    if (typeof savedGame.clickaxesAutoPow !== "undefined")
      clickaxes.autoPow = savedGame.clickaxesAutoPow;
    if (typeof savedGame.clickaxesUpgrades !== "undefined")
      clickaxes.upgrades = savedGame.clickaxesUpgrades;
    if (typeof savedGame.clickaxesAutoPrice !== "undefined")
      clickaxes.autoPrice = savedGame.clickaxesAutoPrice;
    if (typeof savedGame.clickaxesItem !== "undefined")
      clickaxes.item = savedGame.clickaxesItem;
    if (typeof savedGame.clickaxesItemPrice !== "undefined")
      clickaxes.itemPrice = savedGame.clickaxesItemPrice;
    if (typeof savedGame.clickaxesPrice !== "undefined")
      clickaxes.price = savedGame.clickaxesPrice;
    if (typeof savedGame.clickaxesClickerItem !== "undefined")
      clickaxes.clickerItem = savedGame.clickaxesClickerItem;
    if (typeof savedGame.smeltersClicks !== "undefined")
      smelters.clicks = savedGame.smeltersClicks;
    if (typeof savedGame.smeltersPlus !== "undefined")
      smelters.clickPlus = savedGame.smeltersPlus;
    if (typeof savedGame.smeltersAutoPlus !== "undefined")
      smelters.autoPlus = savedGame.smeltersAutoPlus;
    if (typeof savedGame.smeltersAutoMachines !== "undefined")
      smelters.autoMachines = savedGame.smeltersAutoMachines;
    if (typeof savedGame.smeltersAutoPow !== "undefined")
      smelters.autoPow = savedGame.smeltersAutoPow;
    if (typeof savedGame.smeltersItem !== "undefined")
      smelters.item = savedGame.smeltersItem;
    if (typeof savedGame.smeltersItemPrice !== "undefined")
      smelters.itemPrice = savedGame.smeltersItemPrice;
    if (typeof savedGame.smeltersPrice !== "undefined")
      smelters.price = savedGame.smeltersPrice;
    if (typeof savedGame.smeltersUpgrades !== "undefined")
      smelters.upgrades = savedGame.smeltersUpgrades;
    if (typeof savedGame.smeltersAutoPrice !== "undefined")
      smelters.autoPrice = savedGame.smeltersAutoPrice;
    if (typeof savedGame.smeltersClickerItem !== "undefined")
      smelters.clickerItem = savedGame.smeltersClickerItem;
    if (typeof savedGame.soldersClicks !== "undefined")
      solders.clicks = savedGame.soldersClicks;
    if (typeof savedGame.soldersPlus !== "undefined")
      solders.clickPlus = savedGame.soldersPlus;
    if (typeof savedGame.soldersAutoPlus !== "undefined")
      solders.autoPlus = savedGame.soldersAutoPlus;
    if (typeof savedGame.soldersAutoMachines !== "undefined")
      solders.autoMachines = savedGame.soldersAutoMachines;
    if (typeof savedGame.soldersAutoPow !== "undefined")
      solders.autoPow = savedGame.soldersAutoPow;
    if (typeof savedGame.soldersItem !== "undefined")
      solders.item = savedGame.soldersItem;
    if (typeof savedGame.soldersItemPrice !== "undefined")
      solders.itemPrice = savedGame.soldersItemPrice;
    if (typeof savedGame.soldersPrice !== "undefined")
      solders.price = savedGame.soldersPrice;
    if (typeof savedGame.soldersUpgrades !== "undefined")
      solders.upgrades = savedGame.soldersUpgrades;
    if (typeof savedGame.soldersAutoPrice !== "undefined")
      solders.autoPrice = savedGame.soldersAutoPrice;
    if (typeof savedGame.soldersClickerItem !== "undefined")
      solders.clickerItem = savedGame.soldersClickerItem;
    if (typeof savedGame.showClicker !== "undefined")
      showClicker = savedGame.showClicker;
    if (typeof savedGame.clickersAmt !== "undefined")
      clickersAmt = savedGame.clickersAmt;
  }

  function switchMenu(menu) {
    $(".menus").children().css("display", "none");
    $("." + menu).css("display", "block");
    return menu;
  }

  loadSave();
  changeMain();
  changeInventory();
  changeAchievements();
  changeClickers();
  changeStore();
});
