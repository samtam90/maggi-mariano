import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pelago",
  canonical: links.servizi["centrifugazione-fanghi"]["pelago"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pelago",
  locationNames: { label: "Pelago", href: "pelago" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
