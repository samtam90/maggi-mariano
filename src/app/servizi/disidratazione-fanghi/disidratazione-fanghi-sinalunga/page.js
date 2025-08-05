import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sinalunga",
  canonical: links.servizi["disidratazione-fanghi"]["sinalunga"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sinalunga",
  locationNames: { label: "Sinalunga", href: "sinalunga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
