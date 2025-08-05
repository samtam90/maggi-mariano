import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cosenza",
  canonical: links.servizi["centrifugazione-fanghi"]["cosenza"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cosenza",
  locationNames: { label: "Cosenza", href: "cosenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["cosenza"],
      name: "Cosenza",
  }),
});
