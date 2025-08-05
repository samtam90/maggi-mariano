import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Umbertide",
  canonical: links.servizi["centrifugazione-fanghi"]["umbertide"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Umbertide",
  locationNames: { label: "Umbertide", href: "umbertide" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
