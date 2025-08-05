import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Crotone",
  canonical: links.servizi["centrifugazione-fanghi"]["crotone"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Crotone",
  locationNames: { label: "Crotone", href: "crotone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["crotone"],
      name: "Crotone",
  }),
});
