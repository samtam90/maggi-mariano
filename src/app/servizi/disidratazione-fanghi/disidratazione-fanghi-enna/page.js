import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Enna",
  canonical: links.servizi["disidratazione-fanghi"]["enna"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Enna",
  locationNames: { label: "Enna", href: "enna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["enna"],
      name: "Enna",
  }),
});
