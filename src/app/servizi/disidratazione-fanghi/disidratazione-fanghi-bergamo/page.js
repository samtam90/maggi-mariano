import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bergamo",
  canonical: links.servizi["disidratazione-fanghi"]["bergamo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bergamo",
  locationNames: { label: "Bergamo", href: "bergamo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["bergamo"],
      name: "Bergamo",
  }),
});
