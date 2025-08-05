import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Ravenna",
  canonical: links.servizi["centrifugazione-fanghi"]["ravenna"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Ravenna",
  locationNames: { label: "Ravenna", href: "ravenna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["ravenna"],
      name: "Ravenna",
  }),
});
