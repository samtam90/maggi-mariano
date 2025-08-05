import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Terranuova Bracciolini",
  canonical: links.servizi["centrifugazione-fanghi"]["terranuova-bracciolini"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Terranuova Bracciolini",
  locationNames: { label: "Terranuova Bracciolini", href: "terranuova-bracciolini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
