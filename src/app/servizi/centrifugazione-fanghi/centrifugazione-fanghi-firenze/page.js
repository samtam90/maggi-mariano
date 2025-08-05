import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Firenze",
  canonical: links.servizi["centrifugazione-fanghi"]["firenze"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Firenze",
  locationNames: { label: "Firenze", href: "firenze" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
