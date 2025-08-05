import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Guardea",
  canonical: links.servizi["disidratazione-fanghi"]["guardea"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Guardea",
  locationNames: { label: "Guardea", href: "guardea" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
