interface Iconfig {
  port: string;
}

export const config: Iconfig = {
  port: process.env.PORT || "7654"
};
