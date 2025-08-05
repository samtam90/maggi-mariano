import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Pavia",
  canonical: links.servizi["disidratazione-fanghi"]["pavia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Pavia",
  locationNames: { label: "Pavia", href: "pavia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["pavia"],
      name: "Pavia",
  }),
});
