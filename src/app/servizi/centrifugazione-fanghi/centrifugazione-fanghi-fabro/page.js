import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Fabro",
  canonical: links.servizi["centrifugazione-fanghi"]["fabro"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Fabro",
  locationNames: { label: "Fabro", href: "fabro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
