import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Milano",
  canonical: links.servizi["centrifugazione-fanghi"]["milano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Milano",
  locationNames: { label: "Milano", href: "milano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["milano"],
      name: "Milano",
  }),
});
