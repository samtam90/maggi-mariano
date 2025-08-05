import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bergamo",
  canonical: links.servizi["centrifugazione-fanghi"]["bergamo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bergamo",
  locationNames: { label: "Bergamo", href: "bergamo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["bergamo"],
      name: "Bergamo",
  }),
});
