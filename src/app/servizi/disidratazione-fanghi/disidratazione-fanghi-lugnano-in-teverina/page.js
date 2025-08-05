import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Lugnano in Teverina",
  canonical: links.servizi["disidratazione-fanghi"]["lugnano-in-teverina"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Lugnano in Teverina",
  locationNames: { label: "Lugnano in Teverina", href: "lugnano-in-teverina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
