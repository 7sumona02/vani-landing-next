'use client';

import React from 'react';

import { AnimatePresence, motion } from 'motion/react';

import { useTabs, type Tab } from '@/hooks/UseTabs';
import { cn } from '@/lib/utils';
import VoiceCard from './VoiceCard';
import AiSugg from './AiSugg';
import { SelectButton } from './SelectButton';
import { Download, Play } from 'lucide-react';

interface AnimatedTabsProps {
  tabs: Tab[];
}

const getHoverAnimationProps = (hoveredRect: DOMRect, navRect: DOMRect) => ({
  x: hoveredRect.left - navRect.left - 10,
  y: hoveredRect.top - navRect.top - 4,
  width: hoveredRect.width + 20,
  height: hoveredRect.height + 10
});

const TabContent = ({ tab }: { tab: Tab }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mt-4 h-fit"
    >
      {tab.value === 'home' && (
         <div className="relative h-fit rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/20 shadow-xl shadow-[#7167FF60]">
           <div className="relative h-full">
                <div className="container max-w-3xl mx-auto">
                    <p className="pt-10 text-white text-xl">In the ancient land of Eldoria, where skies shimmered and forests [whispering] whispered secrets to the wind, lived a dragon named Zephyros. [sarcastic] Not the “burn it all down” kind - [exhales] he was gentle, wise, with eyes like old stars. [softly] Even the birds fell silent when he passed.</p>
                </div>
                <div>
                     <div className="container max-w-3xl mx-auto flex md:flex-row flex-col gap-3 pt-32">
                    <AiSugg name="Jessica" desc="Narrate a story" />
                    <AiSugg name="Athena" desc="Narrate a story" />
                    <AiSugg name="Luna" desc="Narrate a story" />
                </div>
                <div className="py-6">
                    <div className="container mx-auto max-w-3xl h-[0.8px] bg-white/30"></div>
                </div>
                <div className="container mx-auto max-w-3xl flex items-center justify-between">
                    <div>
                        <SelectButton />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-[#928FFF] rounded-full flex justify-center items-center p-3"><Play className="text-white size-4" fill="white" /></div>
                        <div className="bg-transparent rounded-full flex justify-center items-center p-3 border border-white/40"><Download className="text-white size-4" /></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      )}
      {tab.value === 'about' && (
        <div className="relative h-fit rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/20 shadow-xl shadow-[#7167FF60]">
                <div className="container mx-auto max-w-3xl grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="flex flex-col gap-5">
                        <div className="text-xl font-medium text-[#e9e9e9]">Original</div>
                        <VoiceCard />
                        <VoiceCard />
                        <VoiceCard />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="text-xl font-medium text-[#e9e9e9]">Voice Clone</div>
                        <VoiceCard />
                        <VoiceCard />
                        <VoiceCard />
                    </div>
                </div>
            </div>
      )}
      {tab.value === 'contact' && (
        <div className="relative h-fit rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/20 shadow-xl shadow-[#7167FF60]">
          <div className="relative h-full">
                <div className="container max-w-3xl mx-auto">
                    <p className="pt-10 text-white text-xl">In the ancient land of Eldoria, where skies shimmered and forests [whispering] whispered secrets to the wind, lived a dragon named Zephyros. [sarcastic] Not the “burn it all down” kind - [exhales] he was gentle, wise, with eyes like old stars. [softly] Even the birds fell silent when he passed.</p>
                </div>
                <div className="pt-32">
                <div className="py-6">
                    <div className="container mx-auto max-w-3xl h-[0.8px] bg-white/30"></div>
                </div>
                <div className="container mx-auto max-w-3xl flex items-center justify-between">
                    <div>
                        <SelectButton />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-[#928FFF] rounded-full flex justify-center items-center p-3"><Play className="text-white size-4" fill="white" /></div>
                        <div className="bg-transparent rounded-full flex justify-center items-center p-3 border border-white/30"><Download className="text-white size-4" /></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      )}
      {/* {tab.value === 'danger-zone' && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-red-500">Caution!</h2>
          <div className="space-y-6">
            <div className="border border-red-200 dark:border-red-900 rounded-lg p-6 bg-red-50 dark:bg-red-900/20">
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">Delete Account</h3>
              <p className="text-red-600/80 dark:text-red-400/80 mb-4">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
              <div className="flex items-center gap-4">
                <input type="text" placeholder="Type 'delete' to confirm" className="flex-1 p-2 rounded-md border border-red-200 dark:border-red-800 dark:bg-red-900/30" />
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </motion.div>
  );
};

const Tabs = ({
  tabs,
  selectedTabIndex,
  setSelectedTab,
}: {
  tabs: Tab[];
  selectedTabIndex: number;
  setSelectedTab: (input: [number, number]) => void;
}): React.ReactElement => {
  const [buttonRefs, setButtonRefs] = React.useState<Array<HTMLButtonElement | null>>([]);

  React.useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const navRef = React.useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [hoveredTabIndex, setHoveredTabIndex] = React.useState<number | null>(null);
  const hoveredRect = buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

  return (
    <nav
      ref={navRef}
      className="flex flex-shrink-0 justify-center items-center relative z-0 py-2"
      onPointerLeave={() => setHoveredTabIndex(null)}>
      {tabs.map((item, i) => {
        const isActive = selectedTabIndex === i;

        return (
          <button
            key={item.value}
            className="text-lg relative rounded-md flex items-center h-8 px-4 z-20 bg-transparent cursor-pointer select-none transition-colors"
            onPointerEnter={() => setHoveredTabIndex(i)}
            onFocus={() => setHoveredTabIndex(i)}
            onClick={() => setSelectedTab([i, i > selectedTabIndex ? 1 : -1])}>
            <motion.span
              ref={(el) => {
                buttonRefs[i] = el as HTMLButtonElement;
              }}
              className={cn('block', {
                'text-[#e9e9e9]': !isActive,
                'text-white font-semibold': isActive
              })}>
              <small className={item.value === 'danger-zone' ? 'text-red-500' : ''}>{item.label}</small>
            </motion.span>
          </button>
        );
      })}

      <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            key="hover"
            className={`absolute z-10 top-0 left-0 rounded-md ${hoveredTabIndex === tabs.findIndex(({ value }) => value === 'danger-zone')
              ? 'bg-red-100 dark:bg-red-500/30'
              : 'bg-gradient-to-b from-[#7167FF85] to-[#938BFF]'
              }`}
            initial={{ ...getHoverAnimationProps(hoveredRect, navRect), opacity: 0 }}
            animate={{ ...getHoverAnimationProps(hoveredRect, navRect), opacity: 1 }}
            exit={{ ...getHoverAnimationProps(hoveredRect, navRect), opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedRect && navRect && (
          <motion.div
            className={`absolute z-10 bottom-0 left-0 h-[2px] ${selectedTabIndex === tabs.findIndex(({ value }) => value === 'danger-zone')
              ? 'bg-red-500'
              : 'bg-black dark:bg-white'
              }`}
            initial={false}
            animate={{
              width: selectedRect.width + 18,
              x: `calc(${selectedRect.left - navRect.left - 9}px)`,
              opacity: 1
            }}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export function AnimatedTabs({ tabs }: AnimatedTabsProps) {
  const [hookProps] = React.useState(() => {
    const initialTabId =
      tabs.find(
        (tab) => tab.value === 'home'
      )?.value || tabs[0].value;

    return {
      tabs: tabs.map(({ label, value, subRoutes }) => ({
        label,
        value,
        subRoutes
      })),
      initialTabId
    };
  });

  const framer = useTabs(hookProps);

  return (
    <div className="w-full">
      <div>
        <Tabs {...framer.tabProps} />
      </div>
      <AnimatePresence mode="wait">
        <TabContent tab={framer.selectedTab} />
      </AnimatePresence>
    </div>
  );
}