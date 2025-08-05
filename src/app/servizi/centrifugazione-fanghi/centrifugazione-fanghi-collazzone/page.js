import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Collazzone",
  canonical: links.servizi["centrifugazione-fanghi"]["collazzone"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Collazzone",
  locationNames: { label: "Collazzone", href: "collazzone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
