import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Fabro",
  canonical: links.servizi["disidratazione-fanghi"]["fabro"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Fabro",
  locationNames: { label: "Fabro", href: "fabro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
