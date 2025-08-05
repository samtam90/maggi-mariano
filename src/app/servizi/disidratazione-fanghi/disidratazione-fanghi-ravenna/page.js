import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Ravenna",
  canonical: links.servizi["disidratazione-fanghi"]["ravenna"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Ravenna",
  locationNames: { label: "Ravenna", href: "ravenna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["ravenna"],
      name: "Ravenna",
  }),
});
