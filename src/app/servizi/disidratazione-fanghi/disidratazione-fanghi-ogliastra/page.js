import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Ogliastra",
  canonical: links.servizi["disidratazione-fanghi"]["ogliastra"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Ogliastra",
  locationNames: { label: "Ogliastra", href: "ogliastra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["ogliastra"],
      name: "Ogliastra",
  }),
});
