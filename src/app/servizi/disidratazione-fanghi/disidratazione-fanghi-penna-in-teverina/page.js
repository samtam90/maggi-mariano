import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Penna in Teverina",
  canonical: links.servizi["disidratazione-fanghi"]["penna-in-teverina"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Penna in Teverina",
  locationNames: { label: "Penna in Teverina", href: "penna-in-teverina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
