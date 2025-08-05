import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bettona",
  canonical: links.servizi["centrifugazione-fanghi"]["bettona"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bettona",
  locationNames: { label: "Bettona", href: "bettona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
