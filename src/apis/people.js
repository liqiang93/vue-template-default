import http from "@/shared/http";

const people = {
  getList: () => http.get("/business/list")
};

export default people;
