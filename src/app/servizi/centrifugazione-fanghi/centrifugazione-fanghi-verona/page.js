import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Verona",
  canonical: links.servizi["centrifugazione-fanghi"]["verona"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Verona",
  locationNames: { label: "Verona", href: "verona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["verona"],
      name: "Verona",
  }),
});
