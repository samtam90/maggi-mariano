import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montevarchi",
  canonical: links.servizi["centrifugazione-fanghi"]["montevarchi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montevarchi",
  locationNames: { label: "Montevarchi", href: "montevarchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
