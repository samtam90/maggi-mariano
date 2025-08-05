import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cremona",
  canonical: links.servizi["centrifugazione-fanghi"]["cremona"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cremona",
  locationNames: { label: "Cremona", href: "cremona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["cremona"],
      name: "Cremona",
  }),
});
