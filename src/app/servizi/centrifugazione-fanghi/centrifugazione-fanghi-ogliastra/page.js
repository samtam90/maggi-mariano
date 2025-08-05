import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Ogliastra",
  canonical: links.servizi["centrifugazione-fanghi"]["ogliastra"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Ogliastra",
  locationNames: { label: "Ogliastra", href: "ogliastra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["ogliastra"],
      name: "Ogliastra",
  }),
});
