import { useState, useEffect, useRef } from "react";

import { MenuCategory } from "../../../../types/incomingDataType";
import { restDetails } from "../../../../types/outgoingDataType";

import CategorySection from "../SideNav/CategorySection";
import MenuItem from "./MenuItem";

type data = {
  id: string;
  value: Element | null;
};

const MenuContent: React.FC<{
  categoryList: MenuCategory[];
  restaurantDetails: restDetails;
}> = ({ categoryList, restaurantDetails }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sectionRefs = useRef<data[]>(
    Array(categoryList.length).fill({ id: "", value: null })
  );

  const areSectionsEqual = (section1: Element, section2: Element) => {
    const div1 = section1.querySelector("div");
    const div2 = section2.querySelector("div");

    if (!div1 || !div2) {
      return false;
    }

    return div1.id === div2.id;
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionRefs.current.forEach((data) => {
            if (data.value !== null) {
              const equal = areSectionsEqual(data.value, entry.target);

              if (equal) {
                setActiveSection(data.id);
                return;
              }
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sectionRefs.current.forEach((data) => {
      if (data.value !== null) {
        observer.observe(data.value);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [categoryList]);

  const sectionRefHandler = (
    element: Element | null,
    id: string,
    index: number
  ) => {
    const obj = {
      id: id,
      value: element,
    };
    sectionRefs.current[index] = obj;
  };

  return (
    <div className="lg:flex">
      <CategorySection menu={categoryList} activeSectionId={activeSection} />

      <div className="divide-y-2 lg:divide-y-0 lg:col-span-3">
        {categoryList.map((eachCategory, index) => (
          <section
            key={eachCategory.id}
            ref={(element) =>
              sectionRefHandler(element, eachCategory.id, index)
            }
            className="px-4 pt-4"
          >
            <h2 className="text-2xl font-semibold lg:text-3xl">
              {eachCategory.itemCategory}
            </h2>

            <div
              id={eachCategory.itemCategory}
              className="gap-1 divide-y lg:divide-y-0 lg:grid lg:grid-cols-3 xl:grid-cols-4"
            >
              {eachCategory.items.map((item) => (
                <MenuItem
                  key={item.id}
                  menuItems={item}
                  restaurantDetails={restaurantDetails}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MenuContent;
