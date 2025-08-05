import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Sinalunga",
  canonical: links.servizi["centrifugazione-fanghi"]["sinalunga"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Sinalunga",
  locationNames: { label: "Sinalunga", href: "sinalunga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
