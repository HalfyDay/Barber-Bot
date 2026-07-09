const createBotMenuService = ({
  prisma,
  randomUUID,
}) => {
  const DEFAULT_BOT_MENU = {
    version: 1,
    updatedAt: new Date().toISOString(),
    screens: [
      {
        id: "main",
        title: "Главное меню",
        message: "Добро пожаловать! Выберите действие.",
        imageUrl: "",
        buttons: [
          { id: "book", label: "Записаться", type: "service", targetScreenId: "services", row: 0, order: 0 },
          { id: "myAppointments", label: "Мои записи", type: "userAppointments", targetScreenId: "appointments", row: 0, order: 1 },
          { id: "profile", label: "Профиль", type: "profile", targetScreenId: "profile", row: 1, order: 0 },
          { id: "about", label: "О нас", type: "description", targetScreenId: "about", row: 1, order: 1 },
        ],
      },
    ],
  };

  const loadBotMenu = async () => {
    try {
      const row = await prisma.botMenu.findUnique({
        where: { id: "default" },
      });
      if (!row) {
        // Create default menu
        const menu = { ...DEFAULT_BOT_MENU, updatedAt: new Date().toISOString() };
        await prisma.botMenu.create({
          data: {
            id: "default",
            payload: menu,
            updatedAt: new Date(),
          },
        });
        return menu;
      }
      return row.payload;
    } catch (error) {
      console.error("[bot-menu] Failed to load bot menu:", error?.message);
      return DEFAULT_BOT_MENU;
    }
  };

  const saveBotMenu = async (payload) => {
    const menu = {
      ...payload,
      updatedAt: new Date().toISOString(),
    };
    try {
      await prisma.botMenu.upsert({
        where: { id: "default" },
        create: {
          id: "default",
          payload: menu,
          updatedAt: new Date(),
        },
        update: {
          payload: menu,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      console.error("[bot-menu] Failed to save bot menu:", error?.message);
      throw error;
    }
    return menu;
  };

  return {
    loadBotMenu,
    saveBotMenu,
  };
};

module.exports = {
  createBotMenuService,
};
