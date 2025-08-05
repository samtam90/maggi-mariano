import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Fermo",
  canonical: links.servizi["centrifugazione-fanghi"]["fermo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Fermo",
  locationNames: { label: "Fermo", href: "fermo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["fermo"],
      name: "Fermo",
  }),
});
