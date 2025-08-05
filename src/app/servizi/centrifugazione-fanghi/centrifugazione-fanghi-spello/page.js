import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Spello",
  canonical: links.servizi["centrifugazione-fanghi"]["spello"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Spello",
  locationNames: { label: "Spello", href: "spello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
