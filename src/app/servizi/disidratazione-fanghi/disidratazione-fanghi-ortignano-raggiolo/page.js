import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Ortignano Raggiolo",
  canonical: links.servizi["disidratazione-fanghi"]["ortignano-raggiolo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Ortignano Raggiolo",
  locationNames: { label: "Ortignano Raggiolo", href: "ortignano-raggiolo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
