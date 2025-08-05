import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Milano",
  canonical: links.servizi["disidratazione-fanghi"]["milano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Milano",
  locationNames: { label: "Milano", href: "milano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["milano"],
      name: "Milano",
  }),
});
