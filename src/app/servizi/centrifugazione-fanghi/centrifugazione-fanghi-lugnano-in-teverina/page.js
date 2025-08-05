import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Lugnano in Teverina",
  canonical: links.servizi["centrifugazione-fanghi"]["lugnano-in-teverina"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Lugnano in Teverina",
  locationNames: { label: "Lugnano in Teverina", href: "lugnano-in-teverina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
