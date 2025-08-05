import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Avellino",
  canonical: links.servizi["centrifugazione-fanghi"]["avellino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Avellino",
  locationNames: { label: "Avellino", href: "avellino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["avellino"],
      name: "Avellino",
  }),
});
