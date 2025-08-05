import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Ortignano Raggiolo",
  canonical: links.servizi["centrifugazione-fanghi"]["ortignano-raggiolo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Ortignano Raggiolo",
  locationNames: { label: "Ortignano Raggiolo", href: "ortignano-raggiolo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
