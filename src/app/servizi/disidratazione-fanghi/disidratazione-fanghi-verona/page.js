import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Verona",
  canonical: links.servizi["disidratazione-fanghi"]["verona"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Verona",
  locationNames: { label: "Verona", href: "verona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["verona"],
      name: "Verona",
  }),
});
